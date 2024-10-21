 let uploadedImageSrc = '';
        let is3D = false; // Track 2D or 3D mode

        // Preview uploaded image
        function previewImage(event) {
            const reader = new FileReader();
            reader.onload = function() {
                const output = document.getElementById('uploadedImage');
                output.src = reader.result;
                output.style.display = "block";
                uploadedImageSrc = reader.result; // Store the uploaded image source
                console.log('Image uploaded:', uploadedImageSrc);
            };
            reader.readAsDataURL(event.target.files[0]);
        }

        // Generate expressions based on the uploaded image
        function generateExpressions() {
            if (!uploadedImageSrc) {
                alert('Please upload an image first.');
                return;
            }

            // Simulated image URLs for different moods
            const moodImages = {
                'smiling': uploadedImageSrc, // Replace with actual generated image URL for smiling
                'laughing': uploadedImageSrc, // Replace with actual generated image URL for laughing
                'surprised': uploadedImageSrc, // Replace with actual generated image URL for surprised
                'sad': uploadedImageSrc, // Replace with actual generated image URL for sad
                'mad': uploadedImageSrc, // Replace with actual generated image URL for mad
                'afraid': uploadedImageSrc  // Replace with actual generated image URL for afraid
            };

            // Update the expression images
            document.getElementById('smilingImage').src = moodImages['smiling'];
            document.getElementById('laughingImage').src = moodImages['laughing'];
            document.getElementById('surprisedImage').src = moodImages['surprised'];
            document.getElementById('sadImage').src = moodImages['sad'];
            document.getElementById('madImage').src = moodImages['mad'];
            document.getElementById('afraidImage').src = moodImages['afraid'];

            console.log('Expressions generated.');
        }

        // Toggle between 2D and 3D modes
        function toggle2D3D() {
            is3D = !is3D;
            const mode = is3D ? '3D' : '2D';
            const expressionImages = document.querySelectorAll('.expression-box img');

            expressionImages.forEach(img => {
                img.style.transform = is3D ? 'rotateY(180deg)' : 'rotateY(0deg)';
            });

            console.log(`Switched to ${mode} mode`);
        }

        // Download the image
        function downloadImage(imageId) {
            const image = document.getElementById(imageId);
            if (!image) {
                console.error('Image element not found.');
                return;
            }

            const link = document.createElement('a');
            link.href = image.src;
            link.download = imageId + '.png';
            link.click();
        }