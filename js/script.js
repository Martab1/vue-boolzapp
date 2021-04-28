
/*  
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse. I messaggi saranno statici per ora. Grafica e immagini allegate nello zip.
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto. I dati dei contatti li trovate allegati nello zip.

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato.

Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
*/




// VUE 
const app = new Vue({
    el: "#app",
    data:{
        // Elenco contatti array di oggetti
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
     
        // user 
        user:{
             name: "Marta Bernardo",
             avatar: "_io",

        },
        contactIndex: 0, 
        newMessage: "",
        search: "",
        itemsRandom: [
            { text: "Credo di non aver capito"},
            { text: "Ciao, come stai?"},
            { text: "Io sto molto bene."},
            { text: "Quanto tempo che non ci sentiamo!!"},
            { text: "Ti stavo pensando proprio l'altro giorno!"},
            { text: "Credo tu abbia sbagliato numero..."},
            { text: "Che bello sentirti! Quando ci vediamo?"}
        
        ],
        itemsIndex: 0,
        emojis:["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]
    },
    methods:{
        // IMPOSTARE CONTATTO ATTRAVERSO L'INDEX (milestone 2)
        setContact(index){
            this.contactIndex = index;
            // console.log(this.contactIndex);
        },
        // INVIARE NUOVO MESSAGGIO  (milestone 3)
        addMessage(){
            if (this.newMessage != ""){
                this.contacts[this.contactIndex].messages.push({
                    message: this.newMessage,
                    status: 'sent',
                    date:'10/01/2020 16:15:22',

                })

                // reset
                this.newMessage = "";

            // RISPOSTA INTERLOCUTORE dopo 1s
            setTimeout(() => {
                this.contacts[this.contactIndex].messages.push({
                    message: this.itemsRandom[this.itemsIndex].text,
                    status: 'received',
                    date:'10/01/2020 16:15:22',
                })


                // RISPOSTE RANDOM (bonus)
                this.itemsRandom.forEach((num) => {
                this.itemsIndex = Math.floor( Math.random() * this.itemsRandom.length);
                })
           
                
            }, 1000)}
                
        },
        // RICERCA CONTATTI (milestone 4)
        searchContacts(){
            this.contacts.forEach(contact => {
                if( contact.name.toLowerCase().includes(this.search.toLowerCase() )) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }

            });
        },
           
        
      
       
    }

});