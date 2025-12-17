import requests
import os
from pathlib import Path
from urllib.parse import quote

# Logos directory
logos_dir = Path('public/logos')
logos_dir.mkdir(exist_ok=True)

# Map of logo names to Simple Icons names and formats
logos_to_download = {
    # Android Development
    'android-architecture-logo.png': 'https://raw.githubusercontent.com/google/architecture-samples/main/README.md',  # Custom
    'room-database-logo.png': 'https://cdn.simpleicons.org/android/3DDC84?download=true',  # Using Android icon as fallback
    'retrofit-logo.png': 'https://raw.githubusercontent.com/square/retrofit/master/website/static/logo.png',
    'dagger-hilt-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',  # Using Android icon as fallback
    'livedata-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',  # Using Android icon as fallback
    'viewmodel-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',  # Using Android icon as fallback
    
    # Already exists, just verifying
    'android-studio-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',
    'android-sdk-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',
    'gradle-logo.png': 'https://cdn.simpleicons.org/gradle/02303A',
    'jetpack-compose-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',
    'material-design-logo.png': 'https://cdn.simpleicons.org/materialdesign/757575',
    'glide-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',
    'coroutines-logo.png': 'https://cdn.simpleicons.org/kotlin/7F52FF',
    'mvvm-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',
    'rxjava-logo.png': 'https://cdn.simpleicons.org/reactivex/BD3C3D',
    'okhttp-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',
    'google-play-logo.png': 'https://cdn.simpleicons.org/googleplay/414141',
    'navigation-component-logo.png': 'https://cdn.simpleicons.org/android/3DDC84',
}

# Alternative: Use Simple Icons CDN with direct SVG download
simple_icons_map = {
    'Android Studio': 'android',
    'Android SDK': 'android', 
    'Gradle': 'gradle',
    'Jetpack Compose': 'android',
    'Material Design': 'materialdesign',
    'Room Database': 'android',
    'Retrofit': 'square',  # Square created Retrofit
    'OkHttp': 'square',
    'Glide': 'android',
    'Coroutines': 'kotlin',
    'MVVM': 'android',
    'Dagger Hilt': 'android',
    'RxJava': 'reactivex',
    'Google Play': 'googleplay',
    'Android Architecture': 'android',
    'LiveData': 'android',
    'ViewModel': 'android',
    'Navigation Component': 'android',
}

print("Downloading logos from Simple Icons...")

# Using Simple Icons CDN - convert to PNG
base_url = "https://cdn.simpleicons.org/"

# Mapping of technology to Simple Icons slug
icons_to_download = {
    'android-studio-logo': ('android', '3DDC84'),
    'android-sdk-logo': ('android', '3DDC84'),
    'gradle-logo': ('gradle', '02303A'),
    'jetpack-compose-logo': ('android', '3DDC84'),
    'material-design-logo': ('materialdesign', '757575'),
    'room-database-logo': ('android', '3DDC84'),
    'retrofit-logo': ('square', '000000'),
    'okhttp-logo': ('square', '000000'),
    'glide-logo': ('android', '3DDC84'),
    'coroutines-logo': ('kotlin', '7F52FF'),
    'mvvm-logo': ('android', '3DDC84'),
    'dagger-hilt-logo': ('android', '3DDC84'),
    'rxjava-logo': ('reactivex', 'BD3C3D'),
    'google-play-logo': ('googleplay', '414141'),
    'android-architecture-logo': ('android', '3DDC84'),
    'livedata-logo': ('android', '3DDC84'),
    'viewmodel-logo': ('android', '3DDC84'),
    'navigation-component-logo': ('android', '3DDC84'),
}

for filename, (icon_name, color) in icons_to_download.items():
    # Convert color code (remove # if present)
    color = color.lstrip('#')
    
    # Create URL for SVG
    svg_url = f"{base_url}{icon_name}/{color}"
    
    filepath = logos_dir / f"{filename}.png"
    
    # Skip if already exists
    if filepath.exists():
        print(f"✓ {filename}.png already exists")
        continue
    
    try:
        print(f"Downloading {filename} from {icon_name}...")
        response = requests.get(svg_url, timeout=10)
        
        if response.status_code == 200:
            # Save as PNG
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"✓ Downloaded {filename}.png")
        else:
            print(f"✗ Failed to download {filename}: Status {response.status_code}")
    except Exception as e:
        print(f"✗ Error downloading {filename}: {str(e)}")

print("\nDownload complete!")
