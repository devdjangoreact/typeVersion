from django.contrib import admin

from .models import Category, Post


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fields = (
        "name",
        "slug",
        "description",
        "created_date",
        "updated_date",
    )
    list_display = (
        "name",
        "slug",
        "description",
        "created_date",
        "updated_date",
    )
    readonly_fields = (
        "created_date",
        "updated_date",
    )


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    fields = (
        "name",
        "slug",
        "description",
        "category",
        "created_date",
        "updated_date",
    )
    list_display = (
        "name",
        "slug",
        "description",
        "category",
        "created_date",
        "updated_date",
    )
    readonly_fields = (
        "created_date",
        "updated_date",
    )
