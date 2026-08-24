# Legge delle inverse

La **legge delle inverse** dice che:

**Se è vera la proposizione diretta allora la proposizione controinversa è sempre vera;**

In simboli abbiamo la funzione proposizionale:

$$
(H \to T) \to (\overline{T} \to \overline{H})
$$

Mostriamo che questa è una tautologia e quindi la relazione è valida.

| $$H$$ | $$T$$ | $$\overline{T}$$ | $$\overline{H}$$ | $$H \to T$$ | $$\overline{T} \to \overline{H}$$ | $$(H \to T) \to (\overline{T} \to \overline{H})$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |
| $$\textcolor{red}{f}$$ | $$\textcolor{red}{f}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ | $$\textcolor{red}{v}$$ |

> Per eseguire la tabella segui le tabelle delle operazioni elementari già fatte:
> - la terza colonna è la [negazione](kba.html) di $$T$$: il vero diventa falso ed il falso diventa vero;
> - la quarta colonna è la [negazione](kba.html) di $$H$$: il vero diventa falso ed il falso diventa vero;
> - la quinta colonna è l'[implicazione materiale](kbf.html) tra $$H$$ e $$T$$ che è falsa solo se la prima è vera e la seconda è falsa;
> - la sesta colonna è l'[implicazione materiale](kbf.html) tra $$\overline{T}$$ e $$\overline{H}$$ che è falsa solo se la prima è vera e la seconda è falsa;
> - L'ultima colonna è l'[implicazione materiale](kbf.html) tra $$H \to T$$ e $$\overline{T} \to \overline{H}$$ che è falsa solo se la prima parte è vera e la seconda parte è falsa.

Allo stesso modo si può dimostrare:
**Se è vera la controinversa allora è vera la diretta**

> Provalo per esercizio e poi controlla lo [svolgimento](kbnbea.html).

Siccome è vera sia la legge delle inverse che la proposizione inversa ne segue che i due fatti:

**Se Ipotesi allora Tesi**

**Se non Tesi allora non Ipotesi**

sono equivalenti come abbiamo già visto parlando della [doppia deduzione logica](kbi.html).