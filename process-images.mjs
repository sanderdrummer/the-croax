// process-images.mjs

import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "raw"; // Directory containing original images
const outputDir = "public"; // Directory for processed images
const sizes = [480, 800, 1200];

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

// Read all files from the input directory
fs.readdir(inputDir, (err, files) => {
	if (err) {
		console.error("Could not list the directory.", err);
		process.exit(1);
	}

	files.forEach((file) => {
		const inputPath = path.join(inputDir, file);
		const baseName = path.parse(file).name;

		// Process each image file
		sizes.forEach((size) => {
			sharp(inputPath)
				.resize({ width: size })
				.toFile(`${outputDir}/${baseName}-${size}.webp`, (err, info) => {
					if (err) {
						console.error(`Error resizing ${file} to ${size}px:`, err);
					} else {
						console.log(
							`Successfully created ${outputDir}/${baseName}-${size}.webp`,
							info,
						);
					}
				});
		});
	});
});
