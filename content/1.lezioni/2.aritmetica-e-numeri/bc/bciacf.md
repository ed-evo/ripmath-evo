# Alcuni utili criteri di scomposizione

Spesso quando si scompone durante un compito in classe il tempo è prezioso, quindi diventano molto utili alcuni criteri che, se anche non si riferiscono a numeri primi, ci permettono di risparmiare tempo: vediamoli qui di seguito:

- **Criterio di scomposizione per $$4$$:**
  Un numero è divisibile per $$4$$ se le sue ultime due cifre sono divisibili per $$4$$.
  > **Esempio:**
  > $$34532$$ è divisibile per $$4$$ perché il numero formato dalle ultime due cifre $$32$$ è divisibile per $$4$$.
  > $$34522$$ invece non è divisibile per $$4$$ perché il numero formato dalle ultime due cifre $$22$$ non è divisibile per $$4$$.

- **Criterio di scomposizione per $$9$$:**
  Un numero è divisibile per $$9$$ se la somma delle sue cifre è $$9$$ (ricordo che la somma può essere fatta ricorsivamente sulla somma stessa).
  > **Esempio:**
  > $$34533$$ è divisibile per $$9$$ perché la somma delle sue cifre $$3+4+5+3+3=18 \Rightarrow 1+8=9$$ è $$9$$.
  > $$34536$$ invece non è divisibile per $$9$$ perché la somma delle sue cifre $$3+4+5+3+6=21 \Rightarrow 2+1=3$$ non è $$9$$.

- **Criterio di scomposizione per $$10$$:**
  Un numero è divisibile per $$10 = 5 \cdot 2$$ se la sua ultima cifra è $$0$$.
  > **Esempio:**
  > $$340$$ è divisibile per $$10$$ perché termina per $$0$$: $$340 = 2 \cdot 5 \cdot 34$$.
  > $$34000$$ è addirittura divisibile per $$1000$$ perché termina con tre zeri: $$34000 = 2^3 \cdot 5^3 \cdot 34$$.

- **Criterio di scomposizione per $$25$$:**
  Un numero è divisibile per $$25 = 5^2$$ se le sue ultime due cifre sono $$0$$ oppure un multiplo di $$25$$.
  > **Esempio:**
  > $$425$$ è divisibile per $$25$$ perché termina per $$25$$: $$425 = 5^2 \cdot 17$$.
  > $$340$$ non è divisibile per $$25$$ perché $$40$$ non è multiplo di $$25$$.

Vediamo un paio di esempi per vedere come si può velocizzare il calcolo utilizzando questi criteri:

[**$$210 =$$**]{.text-red-darken-1}

$$
\begin{array}{r|l}
210 & 2 \cdot 5 \\
21 & 3 \\
7 & 7 \\
1 & 
\end{array}
$$

Finisce per $$0$$ quindi scompongo per $$10 = 2 \cdot 5$$
[**$$210 = 2 \cdot 5 \cdot 21$$**]{.text-red-darken-1}
$$21$$ è divisibile per $$3$$: $$21 = 3 \cdot 7$$ quindi ottengo
[**$$210 = 2 \cdot 5 \cdot 3 \cdot 7$$**]{.text-red-darken-1}
o meglio, ordinando secondo fattori crescenti
[**$$210 = 2 \cdot 3 \cdot 5 \cdot 7$$**]{.text-red-darken-1}

[**$$7425 =$$**]{.text-red-darken-1}

$$
\begin{array}{r|l}
7425 & 3^2 \\
825 & 5^2 \\
33 & 3 \\
11 & 11 \\
1 & 
\end{array}
$$

La somma delle cifre è $$7+4+2+5=18 \Rightarrow 1+8=9$$ quindi scompongo per $$3^2$$.
$$74:9$$ dà $$8$$ con resto di $$2$$ riporto mentalmente $$2$$ davanti all'altra cifra; $$22:9$$ dà $$2$$ con resto di $$4$$ riporto mentalmente $$4$$ davanti all'altra cifra; $$45:9=5$$.
[**$$7425 = 3^2 \cdot 825$$**]{.text-red-darken-1}

$$825$$ è divisibile per $$25 = 5^2$$.
$$82:25$$ dà $$3$$ con resto di $$7$$ riporto mentalmente $$7$$ davanti all'altra cifra; $$75:25=3$$.
[**$$7425 = 3^2 \cdot 825 = 3^2 \cdot 5^2 \cdot 33$$**]{.text-red-darken-1}
$$33$$ è divisibile per $$3$$; $$33:3=11$$ ed $$11$$ è primo; quindi:
[**$$7425 = 3^2 \cdot 5^2 \cdot 3 \cdot 11$$**]{.text-red-darken-1}
o meglio raggruppando ed ordinando
[**$$7425 = 3^3 \cdot 5^2 \cdot 11$$**]{.text-red-darken-1}