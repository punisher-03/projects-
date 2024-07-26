
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
    .prompt([{
        message: "Type your URL:",
        name: "URL",
    }])
    .then((answers) => {
        console.log(answers);
        const url = answers.URL;


        const svg_string = qr.imageSync(url, { type: 'png' });

        fs.writeFileSync('URL.txt', url);

        console.log('QR code saved to URL.txt');
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
        } else {
            console.error("Something else went wrong", error);
        }
    }
    ); 
