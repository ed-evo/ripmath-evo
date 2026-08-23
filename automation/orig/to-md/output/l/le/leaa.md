# [Variabile aleatoria (casuale)]{.text-red}

> **Definizione:** La variabile aleatoria è una variabile che può assumere valori diversi in corrispondenza di altrettanti eventi che costituiscono una partizione dello spazio delle probabilità.

Vediamo su un esempio già fatto:
estrarre una carta da un mazzo di $$40$$
consideriamo gli eventi:
- $$E_1$$ uscita dell'asso di denari e vincita di $$21$$ euro ($$1$$ carta)
- $$E_2$$ uscita di un asso diverso dall'asso di denari e vincita di $$1$$ euro ($$3$$ carte)
- $$E_3$$ uscita di una carta di denari diversa dall'asso né vincita né perdita ($$9$$ carte)
- $$E_4$$ uscita di una diversa dalle precedenti perdita di $$1$$ euro ($$27$$ carte)

le probabilità sono:
- **$$p_1$$ = probabilità di uscita dell'asso di denari = $$1/40$$**
- **$$p_2$$ = probabilità di uscita di asso non di denari = $$3/40$$**
- **$$p_3$$ = probabilità di uscita di carta di denari non asso = $$9/40$$**
- **$$p_4$$ = probabilità di uscita di una carta diversa dalle precedenti = $$27/40$$**

Nella partizione dello spazio delle probabilità negli spazi degli eventi $$E_1$$, $$E_2$$, $$E_3$$ ed $$E_4$$ ho indicato i rispettivi valori delle probabilità degli eventi considerati.

In pratica la variabile aleatoria [**$$X$$]{.text-red} è la funzione che associa ad ogni evento di una partizione un numero reale legato alla probabilità dell'evento.
Nell'esempio sopra indicato abbiamo che i valori della variabile aleatoria [**$$X$$]{.text-red} sono i premi pagati legati alle loro probabilità:
- **$$X(E_1) = 21 \text{ €}$$ con $$p_1 = 1/40$$**
- **$$X(E_2) = 1 \text{ €}$$ con $$p_2 = 3/40$$**
- **$$X(E_3) = 0 \text{ €}$$ con $$p_3 = 9/40$$**
- **$$X(E_4) = -1 \text{ €}$$ con $$p_4 = 27/40$$**

> **Nota:** Da notare che lavoriamo su una partizione dello spazio degli eventi e quindi la somma di tutte le probabilità deve sempre dare come risultato $$1$$:
> $$
> 1/40 + 3/40 + 9/40 + 27/40 = 40/40 = 1
> $$

D'ora in avanti chiamiamo la variabile aleatoria [**$$X$$]{.text-red} e gli argomenti [**$$X_i$$]{.text-red} invece di [**$$X(E_i)$$]{.text-red} per semplicità.

Possiamo utilizzare un metodo per rappresentare la variabile aleatoria (distribuzione della variabile aleatoria):

| [**$$X$$]{.text-red} | [**$$X_1$$]{.text-red} | [**$$X_2$$]{.text-red} | [**$$X_3$$]{.text-red} | ... | [**$$X_n$$]{.text-red} |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [**$$Pr$$]{.text-red} | [**$$p_1$$]{.text-red} | [**$$p_2$$]{.text-red} | [**$$p_3$$]{.text-red} | ... | [**$$p_n$$]{.text-red} |

Nell'esempio precedente legando agli eventi il numero di carte che corrispondono all'evento avremo:

| [**$$X$$]{.text-red} | [**$$21$$]{.text-red} | [**$$1$$]{.text-red} | [**$$0$$]{.text-red} | [**$$-1$$]{.text-red} |
| :--- | :--- | :--- | :--- | :--- |
| [**$$Pr$$]{.text-red} | [**$$1/40$$]{.text-red} | [**$$3/40$$]{.text-red} | [**$$9/40$$]{.text-red} | [**$$27/40$$]{.text-red} |

Naturalmente i numeri sull'asse orizzontale della figura non corrispondono ad una distanza ma solamente alla denominazione dell'evento. È preferibile mettere in ordine crescente il valore della somma persa o vinta: $$-1$$, $$0$$, $$+1$$, $$+21$$.

Se vuoi vedere un altro esercizio:

Altro esempio:
Consideriamo le probabilità di uscita della faccia di un dado:
- **$$E_1$$ uscita del punteggio $$1$$**
- **$$E_2$$ uscita del punteggio $$2$$**
- **$$E_3$$ uscita del punteggio $$3$$**
- **$$E_4$$ uscita del punteggio $$4$$**
- **$$E_5$$ uscita del punteggio $$5$$**
- **$$E_6$$ uscita del punteggio $$6$$**

le relative probabilità sono:
- **$$p_1$$ = probabilità di uscita del punteggio $$1 = 1/6$$**
- **$$p_2$$ = probabilità di uscita del punteggio $$2 = 1/6$$**
- **$$p_3$$ = probabilità di uscita del punteggio $$3 = 1/6$$**
- **$$p_4$$ = probabilità di uscita del punteggio $$4 = 1/6$$**
- **$$p_5$$ = probabilità di uscita del punteggio $$5 = 1/6$$**
- **$$p_6$$ = probabilità di uscita del punteggio $$6 = 1/6$$**

possiamo usare la rappresentazione:

| [**$$X$$]{.text-red} | [**$$1$$]{.text-red} | [**$$2$$]{.text-red} | [**$$3$$]{.text-red} | [**$$4$$]{.text-red} | [**$$5$$]{.text-red} | [**$$6$$]{.text-red} |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [**$$f$$]{.text-red} | [**$$1/6$$]{.text-red} | [**$$1/6$$]{.text-red} | [**$$1/6$$]{.text-red} | [**$$1/6$$]{.text-red} | [**$$1/6$$]{.text-red} | [**$$1/6$$]{.text-red} |