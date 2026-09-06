# metodo di Tartinville

Per utilizzare questo metodo è necessario conoscere bene gli argomenti relativi alle equazioni di secondo grado ed anche le disequazioni di secondo grado, soprattutto ripassa gli schemi sui [valori interni ed esterni](../ag/agdca.html) all'intervallo delle radici.

Faremo uno schema con le seguenti disequazioni relative al parametro:

1. Imponiamo, come prima cosa, che, al variare del parametro, il discriminante dell'equazione sia maggiore di zero per la realtà delle radici.
2. Poniamo poi il primo coefficiente maggiore di zero, per sapere, al variare del parametro, se i valori positivi sono interni od esterni alle radici seguendo gli [schemi delle disequazioni di secondo grado](../ag/agdc.html).
3. Sostituiamo i valori limite $x_1$, $x_2$, $x_3$ alla $x$ e calcoliamo per quali valori del parametro si ha:
   $f(x_1) > 0$;
   $f(x_2) > 0$;
   $f(x_3) > 0$;
   questo ci permetterà di vedere se il valore limite è interno oppure esterno all'intervallo delle radici.
   
   > **Nota:** di solito la discussione è fatta rispetto a due valori assegnati $x_1, x_2$, ma nei problemi talvolta si potranno anche avere tre valori; il terzo valore $x_3$ verrà chiamato limite aggiunto.
4. Calcoliamo infine al variare del parametro la semisomma delle radici, per sapere da che parte sono esterni i valori limiti $x_1, x_2, x_3$. Calcoleremo:
   $\frac{-b}{2a} - x_1$
   $\frac{-b}{2a} - x_2$
   $\frac{-b}{2a} - x_3$
5. Riportiamo tutti i dati (caposaldi) trovati per il parametro nei primi tre punti sulla prima linea di un grafico e sulle altre linee riportiamo tutte le disequazioni precedenti; i dati sulla semisomma sono da considerare solo se utili e non vanno riportati fra i caposaldi.
6. Discutiamo il grafico in ogni intervallo ed in ogni punto trovato.

Vediamo l'applicazione del metodo su un esercizio.
<span class="text-gray-500">Da notare che, purtroppo, esercizi di questo genere sono sempre piuttosto lunghi.</span>

Discutere al variare del parametro $k$ l'equazione:
$(k-1)x^2 + 4kx + 3k = 0$ con i limiti $-2 < x \le 4$

Abbiamo:
<span class="text-blue-500">
$a = k-1$
$b = 4k$
$c = 3k$
</span>

Seguiamo lo schema:

1. Poniamo il discriminante dell'equazione maggiore di zero per la realtà delle radici:
   <span class="text-blue-500">
   $b^2 - 4ac > 0$
   $(4k)^2 - 4(k-1)(3k) > 0$
   $16k^2 - 12k^2 + 12k > 0$
   $4k^2 + 12k > 0$
   $k^2 + 3k > 0$
   </span>
   
   > [nota](afcchcaa.html)

   L'equazione associata $k^2 + 3k = 0$ ha soluzioni:
   <span class="text-blue-500">$k = 0$ e $k = -3$</span>
   Quindi la disequazione è verificata per valori esterni cioè:
   $k < -3 \cup k > 0$

2. Poniamo il primo coefficiente maggiore di zero:
   <span class="text-blue-500">$k-1 > 0$</span> se $k > 1$

3. Sostituiamo i valori limite alla $x$ e poniamo maggiore di zero l'espressione che otteniamo:
   - Sostituisco $-2$:
     <span class="text-blue-500">
     $f(-2) = (k-1)(-2)^2 + 4k(-2) + 3k > 0$
     $(k-1)4 - 8k + 3k > 0$
     $4k - 4 - 8k + 3k > 0$
     $-k > 4$
     </span>
     $k < -4$
   - Sostituisco $4$:
     <span class="text-blue-500">
     $f(4) = (k-1)(4)^2 + 4k(4) + 3k > 0$
     $(k-1)16 + 16k + 3k > 0$
     $16k - 16 + 16k + 3k > 0$
     $35k > 16$
     </span>
     $k > \frac{16}{35}$

4. Adesso calcoliamo la semisomma delle radici:
   $$
   \frac{-b}{2a} = \frac{-4k}{2(k-1)} = \frac{-2k}{k-1}
   $$
   - Calcoliamo $\frac{-b}{2a} - (-2)$:
     $$
     \frac{-2k}{k-1} + 2 > 0
     $$
     $$
     \frac{-2k + 2k - 2}{k-1} > 0
     $$
     $$
     \frac{-2}{k-1} > 0
     $$
     Quindi $\frac{-b}{2a} - (-2) > 0$ per $k < 1$
   - Calcoliamo $\frac{-b}{2a} - 4$:
     $$
     \frac{-2k}{k-1} - 4 > 0
     $$
     $$
     \frac{-2k - 4k + 4}{k-1} > 0
     $$
     $$
     \frac{-6k + 4}{k-1} > 0
     $$
     Calcoli:
     $-6k + 4 > 0 \implies 6k - 4 < 0 \implies 6k < 4 \implies k < \frac{4}{6} \implies k < \frac{2}{3}$
     Quindi $\frac{-b}{2a} - 4 > 0$ per $\frac{2}{3} < k < 1$

5. Ora ordino i caposaldi e faccio il grafico.
   
   > **Nota:** Fai attenzione ad ordinare esattamente i caposaldi, io sbagliavo sempre e poi non mi tornavano i conti; basta che siano ordinati, non c'è bisogno di rispettare la lunghezza degli intervalli.

   Ho indicato con una linea gli intervalli in cui le disequazioni sono verificate.

6. Facciamo la discussione procedendo da sinistra verso destra:

   > **Se $k < -4$ abbiamo**
   > Il discriminante maggiore di zero quindi abbiamo due radici reali e distinte $x_1$ e $x_2$.
   > Il primo coefficiente è negativo, pertanto i valori interni fra $x_1$ e $x_2$ sono positivi.
   > $f(-2)$ è positivo quindi $-2$ è interno alle radici.
   > $f(4)$ è negativo quindi $4$ è esterno alle radici.
   > Quindi abbiamo che in mezzo ai limiti c'è una radice $x_2$ accettabile.
   > **Se $k < -4$ una radice accettabile.**

   > **Se $k = -4$ abbiamo**
   > Il discriminante maggiore di zero quindi abbiamo due radici reali e distinte $x_1$ e $x_2$.
   > Il primo coefficiente è negativo, pertanto i valori interni fra $x_1$ e $x_2$ sono positivi.
   > $f(-2)$ è nullo quindi $-2$ coincide con una delle radici; essendo la semisomma positiva coinciderà con la radice minore $x_1$.
   > <span class="text-gray-500">La semisomma è sempre a metà tra $x_1$ ed $x_2$, quindi se semisomma-valore è positivo allora il valore si trova a sinistra, mentre se è negativa allora il valore sarà a destra.</span>
   > $f(4)$ è negativo quindi $4$ è esterno alle radici.
   > Quindi abbiamo una radice coincidente col valore limite.
   > <span class="text-gray-500">Questa soluzione sarebbe accettabile se avessimo la condizione maggiore od uguale, mentre avendo solo maggiore la soluzione $x_1$ non è accettabile.</span>
   > La soluzione $x_2$ è invece accettabile perché compresa fra $-2$ e $4$.
   > **Se $k = -4$ una radice accettabile.**

   > **Se $-4 < k < -3$ abbiamo**
   > Il discriminante maggiore di zero quindi abbiamo due radici reali e distinte $x_1$ e $x_2$.
   > Il primo coefficiente è negativo, pertanto i valori interni fra $x_1$ e $x_2$ sono positivi.
   > $f(-2)$ è negativo quindi $-2$ è esterno alle radici ed essendo la semisomma positiva sarà esterno a sinistra.
   > $f(4)$ è negativo quindi $4$ è esterno alle radici ed essendo la semisomma negativa sarà esterno a destra.
   > Quindi abbiamo che in mezzo ai limiti ci sono entrambe le radici e sono accettabili.
   > **Se $-4 < k < -3$ due radici accettabili.**

   > **Se $k = -3$ abbiamo**
   > Il discriminante è uguale a zero quindi abbiamo due radici reali e coincidenti $x_1 = x_2$.
   > Il primo coefficiente è negativo, pertanto i valori esterni alle radici sono negativi.
   > $f(-2)$ è negativo quindi $-2$ è esterno alle radici e, essendo la semisomma meno il limite positiva, sarà esterno a sinistra.
   > $f(4)$ è negativo quindi $4$ è esterno alle radici ed, essendo la semisomma meno il limite negativa, sarà esterno a destra.
   > Quindi abbiamo che in mezzo ai limiti ci sono entrambe le radici che sono coincidenti ed accettabili.
   > **Se $k = -3$ due radici coincidenti accettabili.**

   > **Se $-3 < k < 0$ abbiamo**
   > Il discriminante minore di zero quindi nessuna soluzione reale.
   > **Se $-3 < k < 0$ nessuna soluzione.**

   > **Se $k = 0$ abbiamo**
   > Il discriminante è uguale a zero quindi abbiamo due radici reali e coincidenti $x_1 = x_2$.
   > Il primo coefficiente è negativo, pertanto i valori esterni alle radici sono negativi.
   > $f(-2)$ è negativo quindi $-2$ è esterno alle radici e, essendo la semisomma meno il limite positiva, sarà esterno a sinistra.
   > $f(4)$ è negativo quindi $4$ è esterno alle radici ed essendo la semisomma negativa sarà esterno a destra.
   > Quindi abbiamo che in mezzo ai limiti ci sono entrambe le radici che sono coincidenti ed accettabili.
   > **Se $k = 0$ due radici coincidenti accettabili.**

   > **Se $0 < k < 16/35$ abbiamo**
   > Il discriminante maggiore di zero quindi abbiamo due radici reali e distinte $x_1$ e $x_2$.
   > Il primo coefficiente è negativo, pertanto i valori interni fra $x_1$ e $x_2$ sono positivi.
   > $f(-2)$ è negativo quindi $-2$ è esterno alle radici ed essendo la semisomma meno il limite positiva sarà esterno a sinistra.
   > $f(4)$ è negativo quindi $4$ è esterno alle radici ed essendo la semisomma meno il limite negativa sarà esterno a destra.
   > Quindi abbiamo che in mezzo ai limiti ci sono entrambe le radici e sono accettabili.
   > **Se $0 < k < 16/35$ due radici accettabili.**

   > **Se $k = 16/35$ abbiamo**
   > Il discriminante maggiore di zero quindi abbiamo due radici reali e distinte $x_1$ e $x_2$.
   > Il primo coefficiente è negativo, pertanto i valori interni fra $x_1$ e $x_2$ sono positivi.
   > $f(-2)$ è negativo quindi $-2$ è esterno all'intervallo delle radici.
   > $f(4)$ è nullo quindi $4$ coincide con una delle radici; essendo la semisomma negativa coinciderà con la radice maggiore $x_2$.
   > Quindi abbiamo una radice coincidente col valore limite.
   > <span class="text-gray-500">Questa soluzione è accettabile perché abbiamo la condizione minore od uguale a $4$.</span>
   > La soluzione $x_1$ è anch'essa accettabile perché compresa fra $-2$ e $4$.
   > **Se $k = 16/35$ due soluzioni accettabili di cui una limite.**

   > **Se $16/35 < k < 1$ abbiamo**
   > Il discriminante maggiore di zero quindi abbiamo due radici reali e distinte $x_1$ e $x_2$.
   > Il primo coefficiente è negativo, pertanto i valori interni fra $x_1$ e $x_2$ sono positivi.
   > $f(-2)$ è negativo quindi $-2$ è esterno alle radici.
   > $f(4)$ è positivo quindi $4$ è interno alle radici.
   > Quindi abbiamo che in mezzo ai limiti c'è solamente la radice $x_1$.
   > **Se $16/35 < k < 1$ una radice accettabile.**

   > **Se $k = 1$ abbiamo**
   > L'equazione, annullandosi il primo coefficiente, diventa di primo grado.
   > In tal caso andiamo a calcolare direttamente: sostituiamo a $k$ il valore $1$ nell'equazione di partenza ed otteniamo:
   > <span class="text-blue-500">
   > $(k-1)x^2 + 4kx + 3k = 0$
   > $(1-1)^2 + 4(1)x + 3(1) = 0$
   > $4x + 3 = 0$
   > $x = -3/4$
   > </span>
   > Essendo il valore $-3/4$ compreso fra $-2$ e $4$ la soluzione è accettabile.
   > **Se $k = 1$ esiste una sola radice ed è accettabile.**

   > **Se $k > 1$ abbiamo**
   > Il discriminante maggiore di zero quindi abbiamo due radici reali e distinte $x_1$ e $x_2$.
   > Il primo coefficiente è positivo, pertanto i valori interni fra $x_1$ e $x_2$ sono negativi.
   > $f(-2)$ è negativo quindi $-2$ è interno alle radici.
   > $f(4)$ è positivo quindi $4$ è esterno alle radici.
   > Quindi abbiamo che in mezzo ai limiti c'è solamente la radice $x_2$.
   > **Se $k > 1$ una radice accettabile.**

Non è finita: adesso devo [raccogliere](afcchcab.html) i risultati.

Due soluzioni per $-4 < k \le -3 \cup 0 \le k \le \frac{16}{35}$
Una soluzione per $k \le -4 \cup k > \frac{16}{35}$

<span class="text-gray-500">$\cup$ sta per unione, cioè è valido sia il primo intervallo che il secondo.</span>