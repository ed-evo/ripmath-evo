# Limite finito di una funzione in un punto

Il concetto espresso nella pagina precedente è abbastanza comprensibile, diventa più complicato l'esprimerlo in forma matematica.

Per prima cosa, siccome si parla di limite di una funzione e la funzione è come variano i punti sull'asse $y$, partiremo da un intervallo sull'asse $y$ e diremo che allo stringersi di un intervallo sulle $y$ avvicinandosi ad un valore $l$ si stringe anche l'intervallo corrispondente sulle $x$ avvicinandosi ad $x_0$.

Per dire questo consideriamo sull'intervallo delle $x$ (quello marcato più scuro) un qualunque punto $x$ a cui corrisponde $f(x)$ sull'asse $y$. Per rendere piccoli gli intervalli basterà dire che deve essere piccola la distanza tra $f(x)$ ed $l$ e contemporaneamente la distanza tra $x$ ed $x_0$; ora la distanza si ottiene facendo la differenza fra le coordinate, ma essendo sempre positiva, dovrà essere presa in modulo. Quindi basterà dire che quando la distanza sulle $y$ è minore di un numero piccolissimo anche la distanza sulle $x$ dovrà essere minore di un numero piccolissimo, od in modo equivalente quando $f(x)$ si avvicina ad $l$ anche $x$ si avvicina ad $x_0$.

Ora siamo pronti a dare la definizione matematica:

> **Definizione:** Si dice che la funzione $y = f(x)$ ammette limite finito $l$ per $x$ tendente ad $x_0$ e si scrive:
>
> $$
> \lim_{x \to x_0} f(x) = l
> $$
>
> se per ogni numero positivo $\epsilon$ (epsilon) piccolo a piacere esiste un numero $\delta_\epsilon$ (delta epsilon cioè delta dipendente da epsilon) tale che da
>
> $$
> |f(x) - l| < \epsilon \implies |x - x_0| < \delta_\epsilon
> $$

> $|f(x) - l| < \epsilon$ è un intervallo **B** sull'asse $y$
> $|x - x_0| < \delta_\epsilon$ è un intervallo **A** sull'asse $x$, intorno completo del punto $x_0$ con $\delta_\epsilon$ numero dipendente da $\epsilon$
> quindi si può anche dire che quando la $x$ appartiene ad **A** allora $f(x)$ appartiene ad **B**
> od anche: quando $x$ si avvicina ad $x_0$ allora $f(x)$ si avvicina ad $l$

[Esercizi sulla definizione di limite](cda1.html)