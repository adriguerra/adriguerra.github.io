module Jekyll
    class TagPage < Page
      def initialize(site, base, dir, tag, lang, posts, collection)
        @site = site
        @base = base
        @dir = dir
        @name = 'index.html'
  
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'tag_page.html')
        self.data['tag'] = tag
        self.data['lang'] = lang
        self.data['posts'] = posts
        self.data['collection'] = collection
        Jekyll.logger.info "Generating tag page for #{tag} in #{lang} at #{dir}"
      end
    end
  
    class TagGenerator < Generator
      safe true
  
      def generate(site)
        tags = Hash.new { |h, k| h[k] = Hash.new { |hh, kk| hh[kk] = [] } }
  
        site.collections.each do |lang, collection|
          collection.docs.each do |post|
            if post.path.include?("/_#{lang}/posts/")
              post.data['tags'].each do |tag|
                tags[lang][tag] << post
              end
            end
          end
        end
  
        tags.each do |lang, tag_posts|
          tag_posts.each do |tag, posts|
            dir = lang == 'en' ? File.join('tag', tag) : File.join(lang, 'tag', tag)
            collection_label = get_collection_label(site, lang)
            site.pages << TagPage.new(site, site.source, dir, tag, lang, posts, collection_label)
          end
        end
      end
  
      private
  
      def get_collection_label(site, lang)
        site.collections.each do |collection_label, collection|
          return collection_label if collection.label == lang
        end
        nil
      end
    end
  end
  