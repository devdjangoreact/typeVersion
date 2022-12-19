from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView
from .views import SignupView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticatedView, DeleteAccountView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('api/profile/user/<str:pk>/', GetUserProfileView.as_view()),
    path('api/profile/update/<str:pk>/', UpdateUserProfileView.as_view()),
    path('api/profile/authenticated', CheckAuthenticatedView.as_view()),
    path('api/profile/register', SignupView.as_view()),
    path('api/profile/login', LoginView.as_view()),
    path('api/profile/logout', LogoutView.as_view()),
    path('api/profile/delete/<str:pk>/', DeleteAccountView.as_view()),
    path('api/profile/csrf_cookie', GetCSRFToken.as_view()),
    path('api/profile/token/', TokenObtainPairView.as_view()),
    path('api/profile/token/refresh/', TokenRefreshView.as_view()),
    path('api/profile/token/verify/', TokenVerifyView.as_view()),
]
