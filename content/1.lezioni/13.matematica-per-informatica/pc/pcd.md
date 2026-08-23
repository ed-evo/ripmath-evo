# [Algebra binaria di Boole]{.text-red}

Consideriamo un insieme $$B$$ in cui siano definite un'operazione unaria indicata con $$'$$ e due operazioni binarie indicate con $$\otimes$$ e $$\oplus$$ che agiscano su due oggetti distinti $$0$$ e $$1$$.

$$
\{ B, ', \otimes, \oplus; 0, 1 \}
$$

Chiamiamo $$a, b, c, d, \dots$$ degli elementi dell'insieme $$B$$.

> **Nota:** Quindi $$a$$ può essere $$0$$ o $$1$$, $$b$$ può essere $$0$$ o $$1$$, $$c$$ può essere $$0$$ o $$1$$, $$d$$ può essere $$0$$ o $$1$$, eccetera.

Questo insieme è detto algebra di Boole se valgono le seguenti leggi:

- **Legge commutativa**
  $$
  a \oplus b = b \oplus a
  $$
  $$
  a \otimes b = b \otimes a
  $$

- **Legge distributiva**
  $$
  a \oplus (b \otimes c) = (a \oplus b) \otimes (a \oplus c)
  $$
  > **Nota:** Notare che questa è molto diversa dalle leggi per la somma normale in $$\mathbb{N}$$.
  $$
  a \otimes (b \oplus c) = (a \otimes b) \oplus (a \otimes c)
  $$

- **Leggi dell'identità**
  $$
  a \oplus 0 = a
  $$
  > **Nota:** Cioè $$0$$ è l'elemento neutro per $$\oplus$$.
  $$
  a \otimes 1 = a
  $$
  > **Nota:** Cioè $$1$$ è l'elemento neutro per $$\otimes$$.

- **Leggi del complemento**
  > **Nota:** Significano semplicemente che se $$a$$ vale $$0$$ allora $$à$$ vale $$1$$ e se $$a$$ vale $$1$$ allora $$à$$ vale $$0$$.
  $$
  a \oplus