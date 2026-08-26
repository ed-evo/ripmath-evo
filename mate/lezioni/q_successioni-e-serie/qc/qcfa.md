# Come comportarsi con il modulo nei limiti per verificare il limite stesso

se vuoi ripassare la [definizione di modulo](../../a/af/afbhb.html)

Distinguiamo i due casi di limite finito e limite infinito, anche se ci si comporta esattamente nello stesso modo:

- **Limite finito**
  In questo caso per verificare il limite, partiamo dalla disuguaglianza $|a_n-a|<\epsilon$ per mostrare che è possibile stabilire una relazione tra $\epsilon$ ed $n > k_\epsilon$ tale che più diminuisce $\epsilon$, più aumenta $k_\epsilon$ e quindi $n$.

  La disuguaglianza
  $$
  |a_n-a|<\epsilon
  $$
  senza modulo equivale alle disequazioni [Se vuoi approfondire](qcfaa.html):
  $a_n-a < \epsilon$ e $a_n-a > -\epsilon$

  > **Nota:** Talvolta, quando non possono sorgere equivoci, per abbreviare, le disequazioni si scrivono nel modo seguente:
  > $$
  > -\epsilon < a_n-a < \epsilon
  > $$
  > ricordando comunque che si tratta di due disequazioni e quindi nei calcoli dovremo comportarci di conseguenza: ad esempio, spostando il termine $a$ dalla zona centrale dovremo spostarlo sia a destra che a sinistra cambiandolo di segno:
  > $$
  > a -\epsilon < a_n < a +\epsilon
  > $$

- **Limite infinito**
  In questo caso per verificare il limite, partiamo dalla disuguaglianza $|a_n| < M$ per mostrare che è possibile stabilire una relazione tra $M$ ed $n > k_M$ tale che più aumenta $M$, più aumenta $k_M$ e quindi $n$.

  La disuguaglianza
  $$
  |a_n| > M
  $$
  senza modulo equivale alle disequazioni [Se vuoi approfondire](qcfab.html):
  $a_n > M$ e $a_n < -M$
  Disequazioni che vanno risolte separatamente.