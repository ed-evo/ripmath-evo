# bit

La parola [**bit**]{.text-red} è l'acronimo di [**BI**]{.text-red}nary dig[**IT**]{.text-red}, cioè cifra binaria ed è la minima quantità di informazione: si riduce sempre ad uno $0$ oppure ad un $1$.

Intuitivamente, siccome nel computer si ha una corrente che viene mandata ad impulsi regolari (ciclo di clock), tale corrente può passare ($1$) oppure può non passare ($0$) attraverso un circuito/interruttore ed allora, tramite il circuito stesso, l'informazione può essere spostata ad altri interruttori facendoli o meno aprire in modo che l'informazione venga elaborata.

Siccome $0$ ed $1$ rappresentano solamente due stati ci conviene fare dei pacchetti di bit in modo da avere più informazioni diverse possibili.

> Se invio $1$ bit ho $2$ diverse informazioni $2^1$
> $0, 1$
>
> Se invio $2$ bit ho $4$ diverse informazioni $2^2$
> $00, 01, 10, 11$
>
> Se invio $3$ bit ho $8$ possibili informazioni diverse $2^3$
> $000, 001, 010, 011, 100, 101, 110, 111$
>
> Se invio $4$ bit ho $16$ possibili informazioni diverse $2^4$
> $0000, 0001, 0010, 0011, 0100, 0101, 0110, 0111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111$

Quindi se invio un pacchetto di $n$ bit potrò inviare $2^n$ informazioni diverse.

> Sono disposizioni con ripetizione di $2$ oggetti presi $n$ ad $n$
> $$
> D'_{2;n} = 2^n
> $$

Dopo varie vicissitudini si scelse di utilizzare per le informazioni pacchetti da $8$ bit, quindi un totale di $2^8=256$ informazioni diverse.