# Il circuito somma binaria

Terminiamo questo capitolo mostrando come costruire il circuito somma binaria, che è alla base di tutte le operazioni matematiche e logiche che è possibile fare con il computer: il nostro problema è trasformare la somma nell'algebra binaria di Boole in modo che, tramite un particolare circuito, diventi la somma fra due numeri binari.

> **Somma in algebra di Boole**
> $0 + 0 = 0$
> $0 + 1 = 1$
> $1 + 0 = 1$
> $1 + 1 = 1$
>
> **Somma binaria**
> $0 + 0 = 0$
> $0 + 1 = 1$
> $1 + 0 = 1$
> $1 + 1 = 10$

In pratica si tratta di modificare l'ultima riga in modo da avere il "riporto" nell'operazione binaria; togliendo il riporto l'operazione è identica alla porta logica **xor** (or esclusivo).

> **Porta xor**
> $0 \quad 0 \rightarrow 0$
> $0 \quad 1 \rightarrow 1$
> $1 \quad 0 \rightarrow 1$
> $1 \quad 1 \rightarrow 0$

Basterà quindi modificare leggermente il circuito di tale porta per avere il risultato cercato.

La porta **xor** è caratterizzata dalla forma normale disgiuntiva completa $ab' + àb$, cioè dal circuito logico (dove i fili si incrociano non c'è contatto ma vi sono dei ponti).

Aggiungiamo il "riporto" nel seguente modo ed otteniamo il circuito desiderato.

Infatti ora abbiamo:

> **Somma binaria**
> $0 + 0 = 00$
> $0 + 1 = 01$
> $1 + 0 = 01$
> $1 + 1 = 10$

Come volevamo.

Ora il prodotto è una somma ripetuta, la differenza si può pensare come somma complementare ed il quoziente è una differenza ripetuta, quindi questo sarà il circuito modulare che, ripetuto, ci permetterà di impostare sulla macchina le operazioni matematiche (ma anche le operazioni logiche).