# Un esempio

---

Prima di concludere, anche se non servirebbe per informatica, vediamo almeno un esempio classico di Algebra di Boole non binaria ed anche un esempio di insieme parzialmente ordinato.

---

Dato l'insieme $A = \{a, b, c\}$, consideriamone l'insieme [potenza](../../j/jb/jbe.html)

<div v-pre>

$$
\wp(A) = \{\{\emptyset\}, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\}
$$

</div>

Tale insieme, dotato delle normali operazioni di unione, intersezione e complementare è un'algebra di Boole con $0$ che corrisponde all'insieme vuoto $\{\emptyset\}$ ed $1$ che corrisponde all'insieme universo $\{a, b, c\}$.

---

Vediamolo nei particolari. Voglio dimostrare che

$$
(\wp(A); \cup, \cap, ')
$$

è un'algebra di Boole.

' è l'operazione di passaggio al complementare e corrisponde alla differenza fra l'insieme universo e l'insieme considerato, cioè ad esempio:

$$
\{a, b\}' = \{c\} = \{a, b, c\} \setminus \{a, b\}
$$

Chiamiamo $x, y, z, \dots$ dei generici elementi di $\wp(A)$ e controlliamo che valgono le proprietà:

- Legge commutativa
  $x \cup y = y \cup x$
  $x \cap y = y \cap x$
  Vero per la commutatività delle operazioni unione ed intersezione fra insiemi.

- Legge distributiva
  $x \cup (y \cap z) = (x \cup y) \cap (x \cup z)$
  $x \cap (y \cup z) = (x \cap y) \cup (x \cap z)$
  Sono le normali proprietà [distributive](../../j/jb/jbfc.html) fra insiemi.

- Leggi dell'identità
  $x \cup \{\emptyset\} = x$ (cioè $\{\emptyset\}$ corrisponde allo $0$)
  $x \cap \{a, b, c\} = \{a, b, c\}$ (cioè $\{a, b, c\}$ corrisponde ad $1$)

- Leggi del complemento
  $x \cup x' = \{a, b, c\}$
  $x \cap x' = \{\emptyset\}$
  Infatti la somma di due complementari dà l'universo e l'intersezione di due complementari dà l'insieme vuoto.

Essendo soddisfatte tutte le proprietà la struttura $(\wp(A); \cup, \cap, ')$ è un'algebra di Boole.

---

Consideriamo, infine, la normale relazione di inclusione in senso largo $\subseteq$ (contenuto od uguale) fra insiemi.

Diremo che tale relazione è di ordine parziale su $\wp(A)$ e che

$$
\{\wp(A); \subseteq\}
$$

è un insieme parzialmente ordinato. Infatti, chiamati $x, y, z$ elementi qualunque di $\wp(A)$ valgono le 3 proprietà:

- riflessiva
  $$
  x \subseteq x \quad \forall x \in \wp(A)
  $$
  > ogni insieme è contenuto od uguale a se stesso

- antisimmetrica
  $$
  \text{se } x \subseteq y \text{ e } y \subseteq x \Rightarrow x = y \quad \forall x, y \in \wp(A)
  $$

- transitiva
  $$
  x \subseteq y, y \subseteq z \Rightarrow x \subseteq z \quad \forall x, y, z \in \wp(A)
  $$
  > Se il primo insieme è contenuto od uguale ad un secondo ed il secondo insieme è contenuto od uguale ad un terzo ne segue che il primo insieme è contenuto od uguale al terzo

Tale relazione $\subseteq$ induce sull'insieme $\wp(A)$ un ordine che va dagli insiemi più piccoli agli insiemi più grandi, e tale relazione è solo parziale perché esistono elementi non confrontabili: ad esempio $\{a\}$ non è confrontabile con $\{b, c\}$.

A destra una rappresentazione grafica dell'insieme in questione: le linee rosse con verso da sinistra a destra indicano la relazione di inclusione: per ragioni grafiche per l'insieme vuoto (che è contenuto in tutti gli insiemi) non ho messo le linee di inclusione limitandomi ad una linea azzurra fino all'insieme universo.

> notare la forma a cubo con i vertici corrispondenti agli elementi di $\wp(A)$

---