class PostsController < ApplicationController
  before_action :set_post, only: %i[show update destroy]

  # GET /posts
  def index
    @posts = Post.all
    post_map = []
    @posts.each do |post|
      post.files.each do |file|
        json_file = {}

        json_file["file_name"] = file.filename.to_s
        json_file["created_at"] = file.created_at
        json_file["file_size"] = file.byte_size
        json_file["url"] = url_for(file)
        
        post_map.push([
          json_file
        ])
      end
    end
    render json: post_map
  end

  # GET /posts/1
  def show
    render json: @post.as_json(include: :files).merge(
      files: @post.files.map do |file|
        url_for(file)
      end
    )
    # render json: @post.as_json(include: :files)
  end

  # POST /posts
  def create
    @post = Post.new(post_params.except(:files))
    files = params[:post][:files]

    if files
      files.each do |file|
        @post.files.attach(file)
      end
    end

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.save(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def post_params
    params.require(:post).permit(files: [])
  end
end