# tipi di successioni a limite infinito

Distinguiamo i casi

- Successione crescente a limite infinito

  Esempio: consideriamo
  $\frac{1}{4}, \frac{1}{2}, 1, 2, 4, 8, \dots, 2^{n-3}, \dots$

  Essa tende a $+\infty$: i suoi termini si avvicinano al valore $+\infty$ crescendo.

  Da un certo momento in poi tutti i termini della successione sono contenuti nella striscia colorata (intorno di $+\infty$ che posso spingere verso l'alto quanto voglio: qui ho preso il valore $+7$ come bordo della striscia), quindi posso scrivere

  $$
  \lim_{k \to \infty} 2^{k-3} = +\infty
  $$

- Successione decrescente a limite infinito

  Esempio: consideriamo la successione semplicissima
  $-1, -2, -3, -4, -5, \dots, -n, \dots$

  Essa tende al valore $-\infty$: i suoi termini si avvicinano al valore $-\infty$ decrescendo.

  Da un certo momento in poi tutti i termini della successione sono contenuti nella striscia colorata (intorno di $-\infty$ che posso spostare in basso quanto voglio: qui ho preso il valore $-7$ come bordo della striscia), quindi posso scrivere

  $$
  \lim_{k \to \infty} -k = -\infty
  $$

- Successione oscillante tendente ad infinito

  Esempio: prendiamo la successione
  $-1, +2, -3, +4, -5, +6, -7, +8, \dots, n \cdot (-1)^n, \dots$

  Essa tende al valore $\infty$ (senza segno): i suoi termini si avvicinano al valore $\infty$ sia verso l'alto che verso il basso (oscillando).

  Da un certo momento in poi tutti i termini della successione sono contenuti nella striscia colorata (intorno completo di $\infty$ che posso spostare verso infinito quanto voglio), quindi posso scrivere

  $$
  \lim_{k \to \infty} k \cdot (-1)^k = \infty
  $$

  > **Approfondimento:** perché l'intorno di infinito (senza segno) è fatto da due strisce, una verso l'alto ed una verso il basso