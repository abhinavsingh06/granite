class TasksController < ApplicationController
  before_action :load_user, only: [:create]
  before_action :ensure_user_logged_in
  before_action :load_task, only: [:show, :edit, :update, :destroy]

  def index
    @tasks = policy_scope(Task)
  end

  def new
    @task = Task.new
  end

  def create
    # @user = User.find(user_params[:user_id])
    @task = @user.tasks.new(task_params)
    authorize @task
    @task.creator_id = @current_user.id

    if @task.valid?
      @task.save
      redirect_to task_url(@task)
    else
      render new
    end
  end

  def show
    @task = Task.find(params[:id])
    authorize @task
    @comments = @task.comments
  end

  def edit
    @task = Task.find(params[:id])
    authorize @task
  end

  def update
    @task = Task.find(params[:id])
    authorize @task

    if @task.update_attributes(task_params)
      redirect_to @task
    end
  end

  def destroy
    @task = Task.find(params[:id])
    authorize @task
    @task.destroy
    redirect_to tasks_url
  end

  private

    def task_params
      params.require(:task).permit(:description, :assignee_id)
    end

    def load_user
      begin
        @user = User.find(task_params[:assignee_id])
      rescue ActiveRecord::RecordNotFound
        flash[:alert] = "No such user found!"
      end
    end

    def load_task
      @task = Task.where(id: params[:id]).first
      unless @task
        flash[:alert] = "No such task in your records!"
        redirect_to controller: "tasks", action: "index"
      end
    end
end
