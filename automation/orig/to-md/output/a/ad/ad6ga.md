# [Come si usa la tabella di riepilogo per le scomposizioni]{.text-red}

Premetto che, secondo me, questa tabella è una delle pochissime cose che in matematica bisognerebbe "studiare a memoria", perché ci permette di poter affrontare quasi tutte le possibili scomposizioni di un polinomio fino a sei termini.

***

Vediamo con un semplice esercizio come usare la tabella per scomporre un polinomio:
Scomponiamo il polinomio:

$$
\textcolor{red}{a^2x^2 + ax^2 - ax - x =}
$$

prima operazione da fare è raccogliere a fattor comune cioè

$$
\textcolor{red}{=x(a^2x + ax - a - 1)=}
$$

Ora conto i termini dentro parentesi: sono 4 quindi vado a vedere le scomposizioni a quattro termini: prima ho il cubo di un binomio e direi che non va bene perché non ho termini al cubo, poi ho il raccoglimento parziale, proviamo a raccogliere il primo con il terzo ed il secondo con il quarto:

$$
\textcolor{red}{=x[a(ax-1)+1(ax-1)]=}
$$

poiché dentro parentesi tonde i termini sono uguali posso raccogliere

$$
\textcolor{red}{x[(ax-1)(a+1)]=}
$$

Tolgo le parentesi quadre perché non servono

$$
\textcolor{red}{=x(ax-1)(a+1)}
$$

***

> **Nota:** Per scomporre prima devi raccogliere a fattor comune totale poi contare il numero di termini che ti restano dentro parentesi (o fuori se non hai raccolto niente), poi vai a controllare le scomposizioni associate a quel numero di termini in ordine come sono (dalla più semplice alla più difficile) finché non trovi quella giusta e se alla fine vedi che nessuna scomposizione va bene devi scrivere **polinomio non scomponibile**.

***

Proviamo a scomporre il polinomio:

$$
\textcolor{red}{x^3 - x^2 + 2x + 1 =}
$$

Non c'è niente da raccogliere a fattor comune totale allora conto i termini: sono 4

- La prima scomposizione a quattro termini è il cubo di un binomio, ho due termini al cubo ma mi mancano i tripli prodotti, quindi non va bene
- Provo il raccoglimento parziale ma vedo subito che non posso farlo perché ho tre segni positivi ed uno negativo, quindi anche questa scomposizione non va bene
- Provo a raggruppare: sembra quasi ci sia il quadrato di un binomio ma i termini che potrebbero essere quadrati sono uno positivo e l'altro negativo quindi non è un quadrato e non vedo altri possibili raggruppamenti, passo avanti
- Provo Ruffini: i possibili divisori sono $$\textcolor{red}{+1}$$ e $$\textcolor{red}{-1}$$

$$
\textcolor{red}{P(1) = (1)^3 - (1)^2 + 2(1) + 1 = 1 - 1 + 2 + 1 = 3}
$$

$$
\textcolor{red}{P(-1) = (-1)^3 - (-1)^2 + 2(-1) + 1 = -1 - 1 - 2 + 1 = -3}
$$

e con entrambi il polinomio mi dà resto diverso da zero quindi anche questa scomposizione è da scartare
- il polinomio $$\textcolor{red}{x^3 - x^2 + 2x + 1 =}$$ non è scomponibile