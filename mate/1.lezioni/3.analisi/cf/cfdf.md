# Velocità e accelerazione

Questo veramente sarebbe un argomento di fisica, ma storicamente è stato questo che ha portato Newton a costruire il concetto di derivata di una funzione in un punto.

> **Curiosità:** storicamente i matematici hanno sempre storto il naso quando hanno visto la loro materia "imbarbarirsi" con altre discipline: fino a pochi decenni fa i geometri hanno guardato dall'alto in basso gli algebristi e questi hanno fatto la stessa cosa con gli studiosi di Analisi; me ne sono reso conto quando frequentavo l'università ed una delle discipline che fui costretto a studiare fu la geometria con la riga ed il compasso; pensa che per quasi un secolo dopo la scoperta di Newton e di Leibnitz molti matematici anche italiani rifiutarono l'analisi matematica perché non "vera" matematica. Fortunatamente oggi, con Godel, Turing e l'avvento dell'informatica parecchi pregiudizi sono spariti.

Consideriamo un punto che si muova su una traiettoria di moto vario ed il suo moto sia descrivibile con un'equazione del tipo

$$
\textcolor{red}{S = f(t)}
$$

ora se voglio la velocità media nell'intervallo di tempo da $$\textcolor{red}{t_1}$$ a $$\textcolor{red}{t_2}$$ dovrò calcolare il rapporto

$$
\textcolor{red}{\frac{\Delta s}{\Delta t} = \frac{s_2 - s_1}{t_2 - t_1}}
$$

ma questo rapporto, quando prendo un intervallo di tempo molto piccolo mi corrisponderà sia alla derivata dello spazio rispetto al tempo che alla velocità istantanea

$$
\textcolor{red}{v = \lim_{t_2 \to t_1} \frac{\Delta s}{\Delta t} = \frac{ds}{dt} = s'(t)}
$$

Quindi per ottenere la velocità basterà derivare lo spazio rispetto al tempo.

**Esempio:** considero l'equazione del moto uniformemente accelerato con partenza da fermo

$$
\textcolor{red}{s = \frac{1}{2}at^2}
$$

se ne voglio la velocità sarà sufficiente fare la derivata rispetto alla variabile $$t$$

$$
\textcolor{red}{v = s'(t) = \frac{1}{2}a \cdot 2t = at}
$$

che è la formula per la velocità nel moto accelerato con partenza da fermo.

Stesso discorso possiamo fare per l'accelerazione media e l'accelerazione istantanea, in pratica ne deriva che l'accelerazione istantanea è il limite del rapporto fra la velocità ed il tempo quando facciamo tendere a zero l'intervallo di tempo, cioè se faccio la derivata della velocità ottengo l'accelerazione.

> Negli esempi è riportato il caso del moto uniformemente accelerato con partenza dall'origine e con velocità iniziale zero.

In pratica, come forse ho già accennato, la derivata interverrà in tutte le discipline dove si parlerà di qualcosa che varia al variare di qualcos'altro: ad esempio nei flussi di corrente elettrica o di magnetismo al variare del tempo, nelle variazioni di concentrazione di una soluzione in una reazione chimica, nelle variazioni di popolazione al variare del numero di predatori, eccetera...

In tutti i campi della scienza ormai è necessario conoscere e saper utilizzare le derivate.