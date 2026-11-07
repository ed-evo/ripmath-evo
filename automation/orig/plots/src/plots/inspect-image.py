from pathlib import Path
from pprint import pprint

import torch
from transformers import AutoProcessor, AutoModelForZeroShotImageClassification
from PIL import Image

processor = AutoProcessor.from_pretrained("google/siglip-base-patch16-224")
model = AutoModelForZeroShotImageClassification.from_pretrained("google/siglip-base-patch16-224")

base_dir = Path(__file__).resolve().parent

def inspect(image_path: Path):
    image = Image.open(image_path)

    # Differentiate between math plots/geometry and other images
    candidate_labels = [
        "has mathematical plot, function curve, coordinate grid, or geometric construction",
        "a standard software screenshot, web page, or statistical bar/pie chart"
    ]

    inputs = processor(text=candidate_labels, images=image, return_tensors="pt", padding=True)

    with torch.no_grad():
        outputs = model(**inputs)
        probs = outputs.logits_per_image.softmax(dim=1)

    is_math_drawable = probs[0][0].item() > 0.5
    confidence = probs[0][0].item()

    print(image_path)

    pprint(probs)

    print(f"Math/Geometry plot detected: {is_math_drawable} (Confidence: {confidence:.2%})")

for p in base_dir.glob("*.png"):
    inspect(p)