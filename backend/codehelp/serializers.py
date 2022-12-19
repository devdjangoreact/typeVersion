from rest_framework import serializers

from .models import Category, Post


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        read_only_fields = (
            "id",
            "created_date",
            "updated_date",
        )


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = (
            "id",
            "created_date",
            "updated_date",
        )

    # def to_representation(self, instance):
    #     response = super().to_representation(instance)
    #     response['category'] = CategorySerializer(instance.category).data
    #     return response

    # def to_representation(self, instance):
    #     self.fields['category'] =  CategorySerializer(read_only=True)
    #     return super(PostSerializer, self).to_representation(instance)
