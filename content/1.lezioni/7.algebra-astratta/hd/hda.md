# Esempio di morfismo

> In pratica dobbiamo vedere se un'operazione si "mantiene" quando trasformiamo mediante funzioni gli oggetti di un dominio su cui tale operazione lavora: naturalmente se gli oggetti sono trasformati anche l'operazione sul codominio potrà essere diversa, però talvolta l'operazione valida nel primo insieme trova corrispondenza in un'operazione nel secondo insieme nel senso che operando sui trasformati dei singoli termini oppure sul trasformato del risultato otteniamo gli stessi valori: in questo caso diciamo che abbiamo un morfismo.
>
> Per capire bene il concetto partiamo da degli esempi e vedrai che è più difficile da dire che da fare, poi, nella pagina successiva, diamo la definizione matematica.

Consideriamo due insiemi e costruiamo una funzione che ci trasformi gli elementi del primo insieme negli elementi del secondo insieme.

Consideriamo come insieme di partenza l'insieme $$\text{N}$$ dei numeri naturali e come secondo insieme l'insieme dei quadrati $$\text{N}^2$$ dei numeri naturali:

$$
\text{N} = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, \dots\}
$$
$$
f \downarrow \downarrow \downarrow \downarrow \downarrow \downarrow \downarrow \downarrow \downarrow \downarrow \downarrow
$$
$$
\text{N}^2 = \{1, 4, 9, 16, 25, 36, 49, 64, 81, 100, \dots\}
$$

e consideriamo la funzione $$f$$ tale che ad ogni numero faccia corrispondere il suo quadrato:

[$$f: n \to n^2$$]{.text-red}

cioè:

[$$f(1) = 1$$]{.text-red}
[$$f(2) = 4$$]{.text-red}
[$$f(3) = 9$$]{.text-red}
$$\dots$$
[$$f(n) = n^2$$]{.text-red}
$$\dots$$

Consideriamo ora il prodotto: per distinguere chiamiamo:
- [$$\times$$]{.text-red} il prodotto nel primo insieme
- [$$\textcolor{red}{\otimes}$$]{.text-red} il prodotto nel secondo insieme

Facciamo un prodotto nel primo insieme:
[$$3 \times 2 = 6$$]{.text-red}

Se consideriamo i corrispondenti nel secondo insieme abbiamo:
[$$9 \textcolor{red}{\otimes} 4 = 36$$]{.text-red}

e l'uguaglianza è valida. Quindi abbiamo che sull'insieme $$\text{N}$$ dotato dell'operazione di moltiplicazione $$\times$$ la funzione $$f$$ è un morfismo; cioè intuitivamente una funzione è un morfismo se conserva l'operazione:

$$
3 \times 2 = 6
$$
$$
f \downarrow \quad \downarrow \quad \downarrow
$$
$$
9 \textcolor{red}{\otimes} 4 = 36
$$

***

Sullo stesso esempio vediamo che se dotiamo l'insieme $$\text{N}$$ dell'operazione somma allora $$f$$ non è più un morfismo.

Per distinguere chiamiamo:
- [$$+$$]{.text-red} la somma nel primo insieme
- [$$\textcolor{red}{\oplus}$$]{.text-red} la somma nel secondo insieme

Facciamo una somma nel primo insieme:
[$$3 + 2 = 5$$]{.text-red}

Se consideriamo i corrispondenti nel secondo insieme abbiamo:
[$$9 \textcolor{red}{\oplus} 4 = 13$$]{.text-red}

e l'uguaglianza non è valida (poiché $$f(5) = 25$$ e non $$13$$). Quindi abbiamo che sull'insieme $$\text{N}$$ dotato dell'operazione di addizione $$+$$ la funzione $$f$$ non è un morfismo:

$$
3 + 2 = 5
$$
$$
f \downarrow \quad \downarrow \quad \downarrow
$$
$$
9 \textcolor{red}{\oplus} 4 = 13
$$

Deriva da ciò che il concetto di morfismo è strettamente legato al concetto di operazione: cioè il morfismo è un'applicazione che trasporta un'operazione da un insieme ad un altro.