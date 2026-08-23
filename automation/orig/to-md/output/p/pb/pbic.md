# [Il comando debug]{.text-red}

Come esempio di quanto detto proviamo il comando debug;

> Premetto che tale comando è funzionante solamente su sistemi derivanti dal DOS e quindi su Windows; se volete attivarlo in Linux dovete avere il programma di emulazione Wine installato e funzionante.
> Ricordo inoltre che i caratteri ASCII hanno grafica e utilizzi diversi a seconda del sistema operativo utilizzato e quindi su macchine diverse potreste vedere in modo diverso rappresentati i caratteri di controllo.
> Raccomando inoltre di seguire esattamente le istruzioni e non provare a "smanettare" a caso: potreste DANNEGGIARE il vostro sistema.

In Windows aprite "tutti i programmi", scegliete "accessori" e scegliete l'opzione "terminale"
vi si aprirà una finestra in bianco e nero con il prompt dei comandi

digitate **debug** e premete invio
otterrete una breve lineetta lampeggiante
digitate **d** (comando dump = salta) e premete invio
se ottenete tutti $$0$$ digitate ancora **d** ed ogni volta premete invio

Per uscire scrivete semplicemente **q** (comando quit = esci) e premete invio
Poi, per chiudere il terminale scrivete **exit** e premete ancora il tasto invio

Digitando **d** più volte otterrete una schermata simile a questa

Questo è il vostro computer: nelle prime colonne ci sono gli indirizzi a $$32$$ bit dei dati della macchina
Dovete pensare al computer come ad un immenso nastro dove in ogni posizione (indirizzo) c'è un dato (Byte) ed ogni posizione è data da un numero binario a $$16$$ bit
Intuitivamente il nastro scorre ed i dati possono essere letti ed utilizzati da un lettore
Come esempio consideriamo la sesta riga del secondo blocco intero (18-sima riga dell'immagine dove ho posizionato la freccia)
l'indirizzo cui sono scritti questi dati è, in esadecimale, da
$$
\text{0CC103D0}
$$
a
$$
\text{0CC103DF}
$$
(su ogni riga è scritto solamente l'indirizzo di inizio)

quindi se volessimo scrivere l'indirizzo in binario questi sono i dati dall'indirizzo
$$
0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 0000
$$
all'indirizzo
$$
0000\ 1100\ 1100\ 0001\ 0000\ 0011\ 1101\ 1111
$$
In questi $$16$$ indirizzi in ordine ci sono $$16$$ dati in esadecimali
$$
27\ 5\text{A}\ 07\ 5\text{B}\ 28\ 5\text{B}\ 07\ \text{B}9\ 28\ 6\text{C}\ 07\ 60\ 29\ 80\ 07
$$

I $$16$$ gruppi di $$2$$ numeri in esadecimale corrispondono ai caratteri ASCII della parte destra dello schermo: [Non ho capito](pbica.html)

> ad esempio il primo dato $$27_{16}$$ corrisponde al carattere decimale $$39\ (16 \times 2 + 9)$$ cui corrisponde il carattere ASCII **'** (apostrofo)
> il secondo dato $$5\text{A}_{16}$$ corrisponde al carattere decimale $$90\ (16 \times 5 + 10)$$ cui corrisponde il carattere ASCII **Z**
> il terzo dato $$07_{16}$$ è un comando e precisamente quello che dà il suono del campanello e a destra viene evidenziato con un puntino; e siccome sulla riga ce ne sono $$4$$ più uno sotto penso che abbiamo "beccato" dove Windows tiene il suono del campanello per segnalare gli errori (din, din din din din)
> tutti i comandi e i caratteri diversi dai tipografici vengono evidenziati con un puntino, ad eccezione del $$20_{16}$$ che ci dà lo spazio tra una parola e l'altra

Potete divertirvi a guardare, nel blocco successivo, alcuni dei messaggi di errore più comuni che restituisce Windows

> Quando (sistemi operativi Spectrum, Commodore, Amiga, DOS,...) i giochi su computer erano carissimi e rarissimi spesso qualcuno passava le nottate sul debug per poter individuare la password che permetteva di entrare nel gioco oppure di superare lo sbarramento di un livello (errori di gioventù.....)