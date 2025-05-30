from django.shortcuts import render
from .models import Profile
from posts.models import Post  # Import the Post model
from .forms import ProfileForm
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

@login_required
def my_profile_view(request):
    obj = Profile.objects.get(user=request.user)
    liked_posts = Post.objects.filter(liked=request.user)  # Get posts that the user has liked
    form = ProfileForm(request.POST or None, request.FILES or None, instance=obj)

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        if form.is_valid():
            instance = form.save()
            return JsonResponse({
                'bio': instance.bio,
                'avatar': instance.avatar.url,
                'user': instance.user.username
            })

    context = {
        'obj': obj,
        'form': form,
        'liked_posts': liked_posts  # Pass liked posts to the template
    }

    return render(request, 'profiles/main.html', context)
