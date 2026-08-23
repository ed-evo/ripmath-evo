# [Teorema di Gödel]{.text-red}

Diremo che un sistema è **completo** se conosciamo ogni sua formula.

Diremo che un sistema è **coerente** se posso dimostrare tutte le sue formule, cioè per ogni sua formula posso dire se è vera oppure falsa.

Il teorema di Gödel dice che:

## [Dato un qualunque sistema formale esso o è coerente oppure è completo]{.text-red}

Cioè un sistema formale non può essere coerente e completo allo stesso tempo: se conosco tutte le formule del sistema allora ci sarà una formula per cui non posso dire se è vera oppure falsa; viceversa, se per ogni formula che conosco so se è vera oppure è falsa, significa che ci sono altre formule nel sistema che ancora non ho individuato.

Vediamone un accenno di dimostrazione.

Ogni sistema formale si può trasformare in un sottoinsieme di $$N$$ come abbiamo visto nelle pagine precedenti e ad ogni formula corrisponde il suo numero di Gödel.

Gödel mostrò che tra le varie formule è possibile individuare una formula chiamata $$G$$ che, una volta ritrasformata dal suo numero, dica:

**["La formula $$G$$ non è dimostrabile"]{.text-red}**

> **Nota:** Ricordo che dimostrabile significa che posso dire se è vera oppure falsa.

Anche qui ci troviamo di fronte ad un paradosso, infatti:

- Se $$G$$ è dimostrabile, allora siccome vale "La formula $$G$$ non è dimostrabile", ne segue che $$G$$ non è dimostrabile.
- Se $$G$$ non è dimostrabile, allora la formula "La formula $$G$$ non è dimostrabile" è vera e quindi dimostrabile.

Per rincarare la dose, Gödel applicò il suo ragionamento all'intera aritmetica e dimostrò che l'aritmetica nel suo complesso o è completa oppure è coerente.