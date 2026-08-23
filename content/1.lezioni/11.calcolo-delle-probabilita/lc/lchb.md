# [Probabilità condizionata (subordinata)]{.text-red}

Finora abbiamo parlato di probabilità senza limitazioni, cioè di probabilità **incondizionata (o subordinata)**; però spesso si incontrano eventi che possono dipendere da altri eventi che si verificano precedentemente: tali eventi, naturalmente, possono influire oppure no sulla probabilità dell'evento successivo; in tal caso occorre introdurre il concetto di **probabilità condizionata**.

**Definiamo probabilità condizionata dell'evento $$E_2$$ rispetto all'evento $$E_1$$ la probabilità che si verifichi l'evento $$E_2$$ dopo che si è verificato l'evento $$E_1$$**

$$\textcolor{red}{P(E_2|E_1)}$$

***

> **Esempio:**
> Da un mazzo di $$40$$ carte estraiamo una carta per volta: se la carta non è una figura rimettiamo la carta nel mazzo prima di procedere ad una nuova estrazione; se la carta è una figura la eliminiamo.
> Trovare la probabilità che la seconda carta estratta sia una figura se la prima estratta è anch'essa una figura:
> in pratica il primo evento (evento $$E_1$$) fa variare la probabilità di uscita della seconda carta (evento $$E_2$$) perché se la prima carta non è una figura avremo per il secondo evento $$12$$ casi favorevoli su $$40$$ casi possibili:
> $$\textcolor{red}{P(E_2) = 12/40}$$
> mentre se la prima carta è una figura avremo per la seconda estrazione $$11$$ casi favorevoli su $$39$$ possibili:
> $$\textcolor{red}{P(E_2) = 11/39}$$

***

Per calcolare la probabilità condizionata possiamo usare la formula:

$$
\textcolor{red}{P(E_2|E_1) = \frac{P(E_1 \cap E_2)}{P(E_1)}}
$$

[dimostrazione](lchba.html)

***

Vale una formula equivalente per la probabilità condizionata dell'evento $$E_1$$ rispetto all'evento $$E_2$$.
Poiché vale $$E_1 \cap E_2 = E_2 \cap E_1$$, allora è valida anche la formula:

$$
\textcolor{red}{P(E_1|E_2) = \frac{P(E_2 \cap E_1)}{P(E_2)}}
$$

***

> **Esempio:**
> Trovare la probabilità che, nel lancio di un dado, sapendo che il risultato sarà un numero dispari, si ottenga il numero $$1$$.
> $$\textcolor{red}{E_2|E_1}$$ = uscita del numero $$1$$ sapendo che esce un numero dispari
> $$\textcolor{red}{E_1}$$ = uscita di un numero dispari
> $$\textcolor{red}{E_2}$$ = uscita del numero uno
> $$\textcolor{red}{E_1 \cap E_2}$$ = uscita del numero $$1$$ e dispari (essendo $$1$$ dispari equivale all'evento uscita del numero $$1$$)
> probabilità di uscita di un numero dispari = $$\textcolor{red}{P(E_1) = 3/6 = 1/2}$$
> probabilità di uscita del numero $$1$$ e dispari = $$\textcolor{red}{P(E_1 \cap E_2) = 1/6}$$
> 
> $$
> \textcolor{red}{P(E_2|E_1) = \frac{P(E_1 \cap E_2)}{P(E_1)} = \frac{1/6}{1/2} = 1/3 = 0,333.. \approx 33\%}
> $$