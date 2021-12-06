FROM ruby:2.6
RUN gem install jekyll bundler
WORKDIR /src
#RUN bundle update github-pages
RUN ls -l
ENTRYPOINT bundle update && bundle exec jekyll serve \
#ENTRYPOINT bundle update github-pages && bundle exec jekyll serve \
  --host 0.0.0.0 --config _config.yml
