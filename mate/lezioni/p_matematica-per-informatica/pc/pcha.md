# esempio di relazione d'ordine parziale non antisimmetrica

Una relazione $R$ su un insieme $A$ è antisimmetrica se vale

$$
a \le b \text{ e } b \le a \Rightarrow a=b \quad \forall a,b \in B
$$

Come esempio di insieme parzialmente ordinato con relazione d'ordine non antisimmetrica prendiamo il piano cartesiano e consideriamo i punti appartenenti a un cerchio chiuso (significa che considero anche la circonferenza di bordo) di raggio $1$ di cui consideriamo solo $1/4$ di cerchio cioè consideriamo il primo quadrante.

Ogni punto $P$ sarà individuato da due coordinate $P = (x, y)$.
Consideriamo come misura ($Mis$) per ogni punto la sua distanza dall'origine:

$$
Mis(P) = \sqrt{x^2 + y^2}
$$

e poniamo la relazione:

$$
P \le Q \Leftrightarrow Mis(P) \le Mis(Q)
$$

> cioè dati due punti $P$ e $Q$ appartenenti al cerchio il primo non è maggiore del secondo se e solo se la distanza dal centro del primo non è maggiore dalla distanza dal centro del secondo.

- la relazione è riflessiva
  $$
  P \le P \Leftrightarrow Mis(P) \le Mis(P) \quad \forall P
  $$
  > ogni punto ha sempre la stessa distanza dall'origine.

- la relazione è transitiva
  $$
  (P \le Q \Leftrightarrow Mis(P) \le Mis(Q)) \text{ e } (Q \le S \Leftrightarrow Mis(Q) \le Mis(S)) \Rightarrow (P \le S \Leftrightarrow Mis(P) \le Mis(S)) \quad \forall P, Q, S
  $$
  > il confronto delle distanze gode della proprietà transitiva.

- la relazione non è antisimmetrica
  cioè da
  $$
  (P \le Q \Leftrightarrow Mis(P) \le Mis(Q)) \text{ e } (Q \le P \Leftrightarrow Mis(Q) \le Mis(P))
  $$
  non segue $P = Q$
  > infatti presi due punti diversi sul cerchio, $P$ e $Q$ essi restano diversi pur avendo uguale distanza dall'origine: in figura ho evidenziato $2$ punti sul bordo del cerchio.