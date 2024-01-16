import inquirer from "inquirer";
import qr from "qr-image"; 
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('qr_image.svg'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something else went wrong");
    }
  });
