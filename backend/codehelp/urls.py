from django.urls import path

from codehelp.views import PostList

from .views import CategoryDetail, CategoryList, PostCategory, PostDetail

urlpatterns = [
    path("api/category/", CategoryList.as_view()),
    path("api/category/<int:pk>/", CategoryDetail.as_view()),
    path("api/posts/", PostList.as_view()),
    path("api/post/<int:pk>/", PostDetail.as_view()),
    path("api/<str:pk>/posts/", PostCategory.as_view()),
]
