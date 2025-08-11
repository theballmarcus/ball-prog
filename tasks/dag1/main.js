         //kopier nedenstående over i p5js editoren
            //og skriv svarende på nedenstående spørgsmål som kommentarer i koden

        let vareInput;
        let prisInput;
        let posteringerTekst = ""; // Vi bruger en tom tekststreng i stedet for et "array"
        let totalPrice = 0;
        function setup() {
            createCanvas(600, 400);
            // Opret input-felter
            vareInput = createInput();
            vareInput.position(20, 65);

            prisInput = createInput();
            prisInput.position(20, 95);
        }

        function draw() {
            background(220); // Brug background() til at rydde skærmen
            
            // Tegn den samlede udgift
            textSize(24);
            text('Total udgift: ' + totalPrice + ' kr.', 20, 30);
            text('Tryk på Enter for at registrere et køb.', 20, 280);

            // Tegn alle posteringerne gemt i tekststrengen
            textSize(16);
            text('Posteringer:', 230, 30);
            text(posteringerTekst, 230, 60); // Viser hele tekststrengen på én gang
        }

        function keyReleased() {
            if (keyCode === ENTER) {
                let vare = vareInput.value();

                posteringerTekst = posteringerTekst + vare + " " + prisInput.value() + " kr" + "\n";
                totalPrice += float(prisInput.value());

                // Rens input-felterne
                vareInput.value('');
                prisInput.value('');
                
            }
        }
