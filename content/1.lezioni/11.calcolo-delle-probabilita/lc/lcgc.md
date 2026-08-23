# [Conseguenze]{.text-red}

Dai postulati deriva che:

- [$$1 = P(S) = P(S \cup \emptyset) = P(S) + P(\emptyset)$$]{.text-blue}
  Quindi [$$P(\emptyset) = 0$$]{.text-blue}
  > La probabilità dell'evento impossibile è nulla.

- Dato un qualunque insieme $$A$$ appartenente ad $$S$$ abbiamo
  [$$1 = P(S) = P(A \cup \bar{A}) = P(A) + P(\bar{A})$$]{.text-blue}
  Quindi, ricavando $$P(A)$$ ho: [$$P(A) = 1 - P(\bar{A})$$]{.text-blue}
  > La probabilità di un evento è uguale a 1 meno la probabilità dell'evento contrario.

- Essendo [$$P(A) + P(\bar{A}) = 1$$]{.text-blue} ne segue che
  [$$0 \le P(A) \le 1$$]{.text-blue}
  > La probabilità di un evento è sempre compresa tra 0 e 1.

- Se [$$A \subseteq B$$]{.text-blue} allora [$$P(A) \le P(B)$$]{.text-blue}
  > Se $$A$$ è contenuto in $$B$$ allora la probabilità dell'evento $$A$$ è minore della probabilità dell'evento $$B$$ (è uguale se $$A=B$$).

- Se [$$A$$]{.text-blue} e [$$B$$]{.text-blue} sono due eventi qualsiasi si ha sempre
  [$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$]{.text-blue}
  > Infatti se considerassi solo $$P(A)$$ e $$P(B)$$ considererei due volte la parte comune $$A \cap B$$.

> **Esempio:**
> Calcolare la probabilità di estrarre da un mazzo di quaranta carte una carta di denari oppure una figura:
> - Evento $$A$$: estrazione di una carta di denari
> - Evento $$B$$: estrazione di una figura
>
> Le carte di denari sono 10: $$P(A) = 10/40 = 1/4$$
> Le figure sono 12: $$P(B) = 12/40 = 3/10$$
> Le carte che sono contemporaneamente figure e denari sono 3: $$P(A \cap B) = 3/40$$
> Quindi:
> $$
> P = P(A) + P(B) - P(A \cap B) = 10/40 + 12/40 - 3/40 = 19/40 \approx 0,475 = 47,5\%
> $$