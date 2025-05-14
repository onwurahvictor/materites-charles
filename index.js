const friends = [ 
    { text: "Onwurah Tochukwu", emoji: "(TVðŸ“º)" },
    { text: "Ezenwa Vitalis", emoji: "(isi Bread ðŸ ž)" },
    { text: "Ezenwa Kingsley", emoji: "(Mkpo Anuru)" },
    { text: "Udorji Obiageri", emoji: "(Nurse Eliza ðŸ‘©â€ âš•ï¸ )" }, 
    { text: "Onyedikachi Obi", emoji: "(Ogurudu)" }, 
    { text: "Anyanwu Rex", emoji: "(Nwa Father)" },
    { text: "Nweke Ugochukwu", emoji: "(Ancestor)" },
    { text: "Anthony Agochukwu", emoji: "(kavkans)" },
    { text: "Njideka Ezenwanne", emoji: "(ðŸ‘©fine girl)" },
    { text: "Ikenna Emesi", emoji: "(PopeðŸ’’)" }, 
    { text: "Ogburie Chetachi", emoji: "(Baret)" },
    { text: "Uzozie Chinonso", emoji: "(Mathew 7 7)" },
    { text: "Oliver Umejesi", emoji: "ðŸ¦¸â€ â™‚ï¸ " },
    { text: "Osuji Chigozie", emoji: "ðŸ‘¨" }, 
    { text: "Chukwudi Agubosim", emoji: " (Doc)" }, 
    { text: "Mazi Chimaobi", emoji: "ðŸ¤¶" },
    { text: "Chioma Geraldine", emoji: "ðŸ‘¸" },
    { text: "Mmaduba Ifeanyi", emoji: "(Black Angel)" },
    { text: "Osinaya Agu", emoji: "(Poet)" },
    { text: "Ejezie Ijeoma", emoji: "ðŸ‘§" } ,
    { text: "Lemanya Samuel", emoji: "(nti nara rieðŸ‘‚)" },,
    { text: "Ezenwa Ogochukwu", emoji: "(ohi okukoðŸ “)" },
    { text: "Onyeiwu Uchenna", emoji: "(Otu ogbo)" },
    { text: "Ezenwatu Chinyere", emoji: "ðŸ‘©â€ âš•ï¸ " }, 
    { text: "Faustina Merenini", emoji: "(SmallyðŸ‘¶)" }, 
    { text: "Ikeme Modestus", emoji: "(Onu utu EziðŸ ·)" },
    { text: "Ngozi Emeghiebo", emoji: "(Nwa Teacher)" },
    { text: "Adilaba Ogochukwu", emoji: "ðŸ™‹â€ â™€ï¸ " },
    { text: "Nnajiofor Kelechukwu", emoji: "ðŸ‘©" },
    { text: "Okechukwu Ibe", emoji: "ðŸ¤´" }, 
    { text: "Nwafor Ijeoma", emoji: " ðŸ‘©â€ ðŸ¦³" },
    { text: "Olivia Ucheonye", emoji: "ðŸ‘¸" },
    { text: "Okrika Goddess", emoji: "(tuza queen)" },
    { text: "Okpala Chioma", emoji: "ðŸ‘¨" }, 
    { text: "Ogechukwu Cynthia", emoji: "ðŸ•µï¸ â€ â™€ï¸ " }, 
    { text: "Oluchi Nwaozuzu", emoji: "ðŸ‘®â€ â™€ï¸ " },
    { text: "Stella Akuagba", emoji: "ðŸ‘§" },
    { text: "Timothy Edeh", emoji: " (gentle)" },
    { text: "Malvis Xtopher", emoji: "ðŸ‘¼" },
    { text: "Onyi Udoka", emoji: "ðŸ‘§" } ,
    { text: "Okanu Tochukwu", emoji: "(Afo ka Otele)" },
    { text: "Peter Gbajie", emoji: "(Odi nmanuðŸ›¢) " },
    { text: "Kelechi Uwandu", emoji: "ðŸ˜Ž" },
    { text: "Collins Okafor", emoji: "ðŸ‘¨" }, 
    { text: "Nwabgo Christain", emoji: " ðŸ‘©" },
    { text: "Okongwu Ifeanyi", emoji: "ðŸ‘¦" },
    { text: "Louis Ugochukwu", emoji: "(guy man)" },
    { text: "Ndidi Amaka", emoji: "ðŸ‘©â€ ðŸ¦°" }, 
    { text: "Perpetual", emoji: "ðŸ‘©â€ ðŸ¦±" }, 
    { text: "Joe Vian", emoji: "ðŸ‘®â€ â™€ï¸ " },
    { text: "Baruwa", emoji: "ðŸ‘§" },
    { text: "Chiemaka Ibe", emoji: "(gentle)" },
    { text: "Ogechukwu Okolocha", emoji: "(black queen)" },
    { text: "Izuchuku Ukaefu", emoji: "(Vuga)" },
    { text: "Abgasonye Jude", emoji: "ðŸ§”" }, 
    { text: "Iheanacho", emoji: "ðŸ‘©â€ ðŸ¦±" }, 
    { text: "Olemba Chinonye", emoji: "ðŸ‘®â€ â™€ï¸ " },
    { text: "Chioma Nwaosu", emoji: "ðŸ‘§" },
    { text: "Chioma Akasiugwu", emoji: "ðŸ‘¸" },
    { text: "Chioma Okoye", emoji: "(Queen)" },
    { text: "Chioma", emoji: "ðŸ‘©â€ ðŸ¦³" },
    { text: "Eziefula Charles", emoji: "(Charles pimple)" }, 
    { text: "Adorable Franca", emoji: "(Nwa Jesu)" }, 
    { text: "Olemba Chinonye", emoji: "ðŸ‘¼" },
    { text: "Chioma Nwaosu", emoji: "ðŸ‘§" },
    { text: "Chinonso Umeoka", emoji: "ðŸ‘®â€ â™€ï¸ " },
    { text: "Lilian Izuwa", emoji: "ðŸ‘©â€ ðŸ¦°" },
    { text: "Chioma Aguleri", emoji: "ðŸ‘©â€ ðŸ¦³" } ,
    { text: "Enemchukwu Nnamdi", emoji: "(OsamaðŸ‘¼ðŸ’”)" }, 
    { text: "Ihesineke Anurika", emoji: "ðŸ‘§" },
    { text: "Ihesineke Chukwudi", emoji: "PaymentðŸ‘®â€ â™€ï¸ " },
    { text: "Ugochukwu Okafor", emoji: "TELEVIðŸ“º" },
    { text: "Mazi Ubochi", emoji: "ðŸ‘®â€ â™€ï¸ " },
   ]; 


const teachers = [ 
    { text: " Mrs Ijeoma", emoji: "(Aunty Igbo)" },
    { text: "Mr Okereke", emoji: "(Sir Dean)" },
    { text: "Mr Igwe", emoji: "(Sir Intro Tech)" },
    { text: "Da Boy", emoji: "(Aunty English)" }, 
    { text: "Aunty Agric", emoji: "ðŸ‘©" }, 
    { text: "Adaka", emoji: "(Aunty Maths)" },
    { text: "Aunty Music", emoji: "ðŸ‘©â€ ðŸ¦°" },
    { text: "Aunty Geograghy", emoji: "ðŸ§‘" },
    { text: "Rev, Sis Amadi", emoji: "ðŸ‘©â€ ðŸ ³" },
    { text: "Sir Literature", emoji: "(Ndi dara Gwo gwo ri ri)" }, 
    { text: "Sir Economics", emoji: "ðŸ‘³â€ â™‚ï¸ " },
   ];
   
   
   


function checkVibe() { 
   const name = document.getElementById('name').value;
   
   

if (name == "") { 
   resultDiv.textContent = "Please enter a name";
}
else { 
   let randomTeachers = teachers[Math.floor(Math.random() * teachers.length)];  
   let randomVibe = friends[Math.floor(Math.random() * friends.length)];
   let randomVibeText = randomVibe.text;
   let randomVibeEmoji = randomVibe.emoji;
   let randomTeacherstext = randomTeachers.text;
   let randomTeachersEmoji = randomTeachers.emoji;
   let randomTeachers1 = randomTeacherstext + " " + randomTeachersEmoji;
   let randomVibe1 = randomVibeText + " " + randomVibeEmoji;
   const resultDiv = document.getElementById('result');
   let maroon = document.getElementById('audio');

   resultDiv.textContent = `${name}, have you checked on ${randomVibe1}. Be your brother's keeper. Also remember  ${randomTeachers1}`;
   resultDiv.style.display = 'block'; 
   resultDiv.style.animation = 'pop 0.5s ease'
   
maroon.play(); 
}


   
}
