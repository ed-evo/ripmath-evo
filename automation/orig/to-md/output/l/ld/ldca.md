# [Gioco equo con probabilità certe]{.text-red}

Nel gioco con probabilità certe è possibile usare in modo esatto gli strumenti matematici possibili per determinarne probabilità di vincita e di perdita, equità del gioco, eccetera.
È anche possibile pensare di costruire dei giochi complessi in cui le speranze matematiche dei singoli giocatori siano esattamente equilibrate.
Vediamo di esaminare alcuni esempi.

***

**Estraggo una carta da un mazzo di $40$: punto $1$ euro per giocare; se esce un asso vinco $8$ euro**

Calcoliamo la speranza matematica del gioco relativamente al giocatore:

- Speranza matematica per "uscita di un asso":
  somma da vincere $8\text{€}$
  probabilità di uscita di un asso = $4/40 = 1/10$
  **Speranza matematica = $S_1 p_1 = 8\text{€} \cdot 1/10 = 0,8\text{€}$**

- Speranza matematica per "punto $1$ euro ogni volta":
  somma da vincere $-1\text{€}$ (negativo perché lo perdo sempre)
  probabilità di giocare = $1$ (è certo che ogni volta pago la posta per giocare)
  **Speranza matematica = $S_2 p_2 = -1\text{€} \cdot 1 = -1\text{€}$**

- **Speranza matematica totale = $S_1 p_1 + S_2 p_2 \approx + 0,8\text{€} - 1\text{€} = -0,2\text{€}$**

La speranza matematica del gioco è $-0,20$ euro circa: cioè se giocassi un euro per volta all'infinito dovrei aspettarmi di perdere in media $20$ centesimi di euro per ogni giocata fatta.
Detto in altro modo: il banco prende il mio euro e, in media, me ne restituisce l'$80\%$ e ne incamera il $20\%$.

***

Nel gioco precedente calcoliamo quanto dovrei guadagnare quando esce l'asso perché il gioco sia equo.
Perché il gioco sia equo la speranza matematica deve essere zero:

$$
S_1 p_1 + S_2 p_2 = 0
$$

Ho:
- $p_1 = \text{probabilità di uscita di un asso} = 1/10$
- $S_2 = \text{somma da puntare ogni volta} = -1\text{€}$
- $p_2 = \text{probabilità di giocare la partita (evento certo)} = 1$
- $S_1 = \text{incognita da determinare perché il gioco sia equo}$

$$
\textcolor{red}{S_1 \cdot 1/10 - 1\text{€} \cdot 1 = 0}
$$
$$
\textcolor{red}{1/10 S_1 = 1\text{€}}
$$
$$
\textcolor{red}{S_1 = 10 \cdot 1\text{€}}
$$
$$
\textcolor{red}{S_1 = 10\text{€}}
$$

Quindi perché il gioco sia equo dovrei riscuotere $10$ euro ogni volta che viene estratto l'asso.