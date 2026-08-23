# Teorema della minorante

Prima di enunciare il teorema introduciamo il concetto di **successione minorante** e **successione maggiorante**.

Date le successioni
$$a_1, a_2, a_3, \dots, a_n, \dots$$ e $$b_1, b_2, b_3, \dots, b_n, \dots$$
se abbiamo
$$
a_1 \le b_1, a_2 \le b_2, a_3 \le b_3, \dots, a_n \le b_n, \dots
$$
allora diremo che la prima successione è una **minorante** della seconda e la seconda è una **maggiorante** della prima.

Ora possiamo enunciare il teorema:

> **Consideriamo le due successioni $$a_1, a_2, a_3, \dots, a_n, \dots$$ e $$b_1, b_2, b_3, \dots, b_n, \dots$$ che abbiano limite finito; se la prima è una minorante della seconda allora vale**
> $$
> \lim_{n \to \infty} a_n \le \lim_{n \to \infty} b_n
> $$

> **Per esercizio dimostriamolo:**
> Abbiamo le due successioni $$a_1, a_2, a_3, \dots, a_n, \dots$$ e $$b_1, b_2, b_3, \dots, b_n, \dots$$ tali che
> $$
> a_1 \le b_1, a_2 \le b_2, a_3 \le b_3, \dots, a_n \le b_n, \dots
> $$
> e sappiamo che vale
> $$
> \lim_{n \to \infty} a_n = a \quad \lim_{n \to \infty} b_n = b \quad \text{con } a \neq b
> $$
> Se $$a \neq b$$ allora per definizione di limite posso trovare un $$\epsilon$$ abbastanza piccolo tale che i due intorni sulla retta reale $$|a-\epsilon|$$ e $$|b-\epsilon|$$ siano disgiunti quindi i termini "avanzati" di $$a_n$$ si troveranno nel primo intorno ed i termini "avanzati" di $$b_n$$ si troveranno nel secondo intorno quando l'indice $$n > k_\epsilon$$ (essendo $$k_\epsilon$$ un numero naturale dipendente da $$\epsilon$$).
> Essendo i numeri reali del primo intorno minori dei numeri reali del secondo intorno ne segue la tesi.