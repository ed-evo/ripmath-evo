# [Il discriminante dell'equazione di secondo grado]{.text-red}

Prima di affrontare questo argomento dovresti leggere le prime parti dei [numeri immaginari e complessi](../../b/be/be.html) fino alla definizione di numero complesso.

Si definisce discriminante o $\Delta$ (delta) il termine che si trova sotto radice nella formula risolutiva dell'equazione di secondo grado.

$$
\textcolor{red}{x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}
$$

cioè

$$
\textcolor{red}{\Delta = b^2 - 4ac}
$$

> Si chiama discriminante perché è il termine che discrimina, cioè rende differenti le soluzioni, infatti quando hai estratto la radice una volta va sommato ed una volta va sottratto così ottieni due valori diversi. A volte si usa anche chiamarlo determinante perché è lui che determina le soluzioni; però è un errore: il determinante è un'altra cosa. Incontreremo il determinante quando parleremo di calcolo matriciale a proposito dei sistemi lineari di più equazioni in più incognite.

Siccome il termine è dentro radice abbiamo tre possibilità:

- il discriminante è [maggiore di zero](afccca.html)
  $$
  \textcolor{red}{\Delta = b^2 - 4ac > 0}
  $$
  In tal caso posso fare la radice e poiché devo sommare e sottrarre otterrò due radici reali e distinte.

- il discriminante è [uguale a zero](afcccb.html)
  $$
  \textcolor{red}{\Delta = b^2 - 4ac = 0}
  $$
  In tal caso la radice vale zero e poiché devo sommare e sottrarre zero otterrò due radici uguali (valori reali e coincidenti) e la doppia [soluzione vale](afccc1.html) $\textcolor{red}{-b/2a}$.

- il discriminante è [minore di zero](afcccc.html)
  $$
  \textcolor{red}{\Delta = b^2 - 4ac < 0}
  $$
  In tal caso non posso fare la radice nei numeri reali ma solo nei numeri immaginari e poiché devo sommare e sottrarre otterrò due radici complesse che differiranno solo per il segno in mezzo ai numeri (radici complesse e coniugate).

> [**Regola:** Un'equazione di secondo grado ammette sempre due soluzioni che potranno essere:]{.text-purple}
> - reali e distinte se il discriminante è maggiore di zero
> - reali coincidenti se il discriminante è uguale a zero
> - complesse e coniugate se il discriminante è minore di zero

> Se il tuo insegnante non ti ha spiegato i numeri complessi puoi semplicemente dire che se il discriminante è minore di zero l'equazione non ammette soluzioni reali.