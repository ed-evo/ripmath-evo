# Probabilità totale

Siano gli eventi $$E_1$$ ed $$E_2$$ due eventi tra loro mutualmente incompatibili, nel senso che può succedere uno solo dei due, e sia $$E$$ un evento che può accadere solamente associato ad uno dei due precedenti; allora vale la relazione (teorema della probabilità totale):

$$
\textcolor{red}{P(E) = P(E_1) \cdot P(E|E_1) + P(E_2) \cdot P(E|E_2)}
$$

---

Naturalmente possiamo generalizzare al caso di $$n$$ eventi tra loro mutualmente indipendenti:

$$
P(E) = P(E_1) \cdot P(E|E_1) + P(E_2) \cdot P(E|E_2) + P(E_3) \cdot P(E|E_3) + \dots + P(E_n) \cdot P(E|E_n)
$$

---

> **Dimostrazione:**
>
> So che gli eventi $$E_1$$ e $$E_2$$ sono tra loro incompatibili e che l'evento $$E$$ può avvenire solo associato ai due eventi precedenti, cioè, con la simbologia della teoria degli insiemi:
>
> $$
> E = (E \cap E_1) \cup (E \cap E_2)
> $$
>
> Per la proprietà additiva fra eventi incompatibili:
>
> $$
> P(E) = P(E \cap E_1) + P(E \cap E_2)
> $$
>
> e per la proprietà moltiplicativa:
>
> $$
> P(E) = P(E_1) \cdot P(E|E_1) + P(E_2) \cdot P(E|E_2)
> $$
>
> Come volevamo.

---

> **Esempio:**
>
> Abbiamo due urne:
> - la prima contiene $$6$$ palline bianche e $$8$$ nere;
> - la seconda contiene $$8$$ palline bianche e $$4$$ nere;
>
> Trovare la probabilità che, estraendo a caso una pallina da una delle due urne, la pallina estratta sia nera.
>
> $$E$$: uscita di una pallina nera
>
> $$E_1$$: uscita della pallina dalla prima urna
>
> $$E_2$$: uscita della pallina dalla seconda urna
>
> Dalla formula abbiamo:
>
> $$
> P(E) = P(E_1) \cdot P(E|E_1) + P(E_2) \cdot P(E|E_2)
> $$
>
> $$P(E_1) = \frac{1}{2}$$ probabilità di estrarre dalla prima urna
>
> $$P(E_2) = \frac{1}{2}$$ probabilità di estrarre dalla seconda urna
>
> $$P(E|E_1) = \frac{8}{14} = \frac{4}{7}$$ probabilità di estrarre una pallina nera dalla prima urna
>
> $$P(E|E_2) = \frac{4}{12} = \frac{1}{3}$$ probabilità di estrarre una pallina nera dalla seconda urna
>
> Quindi ottengo:
>
> $$
> P(E) = \frac{1}{2} \cdot \frac{4}{7} + \frac{1}{2} \cdot \frac{1}{3} = \frac{2}{7} + \frac{1}{6} = \frac{19}{42} = 0,4523\dots \approx 45,2\%
> $$