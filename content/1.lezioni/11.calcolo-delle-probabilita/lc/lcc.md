# Operazioni sugli eventi

Consideriamo due eventi $$\textcolor{red}{E_1}$$ ed $$\textcolor{red}{E_2}$$ appartenenti ad una medesima prova;

Chiamiamo **evento somma** di $$\textcolor{red}{E_1}$$ ed $$\textcolor{red}{E_2}$$ l'evento

$$
\textcolor{red}{E_3 = E_1 \cup E_2}
$$

od anche

$$
\textcolor{red}{E_3 = E_1 + E_2}
$$

che risulta dal verificarsi di almeno uno dei due eventi $$\textcolor{red}{E_1}$$ ed $$\textcolor{red}{E_2}$$.

> **Nota:** Useremo preferibilmente l'unione se parleremo di eventi come insiemi, mentre useremo la somma se parleremo di eventi per trovarne la probabilità.

Chiamiamo **evento prodotto** di $$\textcolor{red}{E_1}$$ ed $$\textcolor{red}{E_2}$$ l'evento

$$
\textcolor{red}{E_3 = E_1 \cap E_2}
$$

od anche

$$
\textcolor{red}{E_3 = E_1 \cdot E_2}
$$

che risulta dal verificarsi contemporaneo di entrambi gli eventi $$\textcolor{red}{E_1}$$ ed $$\textcolor{red}{E_2}$$.

> **Nota:** Useremo preferibilmente l'intersezione se parleremo di eventi come insiemi, mentre useremo il prodotto se parleremo di eventi per trovarne la probabilità.

Due eventi si dicono **complementari** (od opposti) se o si verifica l'uno oppure si verifica l'altro. Come per il complementare negli insiemi vale:

$$
\textcolor{red}{E \cup \overline{E} = S} \quad \textcolor{red}{E \cap \overline{E} = \emptyset}
$$

> **Nota:** Ricordo che $$\textcolor{red}{S}$$ è l'universo.

Due eventi si dicono **mutualmente incompatibili** se sono disgiunti, cioè se vale:

$$
\textcolor{red}{E_1 \cap E_2 = \emptyset}
$$

> **Esempio:** Esperimento: lancio di un dado. $$\textcolor{red}{E_1}$$ uscita del numero 1, $$\textcolor{red}{E_2}$$ uscita di un numero pari. La probabilità che esca un numero pari uguale a 1 è nulla.

Si definisce **sistema completo di eventi due a due incompatibili** un insieme di eventi tali che sia

$$
\textcolor{red}{E_i \cap E_j = \emptyset}
$$

cioè due eventi qualunque sono incompatibili tra loro, ed inoltre valga

$$
\textcolor{red}{E_1 \cup E_2 \cup E_3 \cup \dots \cup E_n = S}
$$

> **Nota:** Corrisponde in teoria degli insiemi alla partizione di un insieme ed al ricoprimento finito.