# [Assiomi di Peano]{.text-red}

Considerando come acquisiti il concetto di numero, di successivo di un numero ed alcuni postulati è possibile costruire l'insieme $$N$$ dei Numeri Naturali.
Sono i Postulati di Peano che avevo già accennato, ma che ora presento in forma un po' più moderna.

Ho i concetti primitivi:
- $$N$$ insieme dei numeri naturali
- $$n$$ numero
- $$n' = n+1$$ successivo di $$n$$ (allora diremo che $$n$$ è l'**antecedente** di $$n+1$$)

I postulati sono:

- $$1 \in N$$
  Il numero $$1$$ appartiene ad $$N$$.
- $$n' = m' \implies n = m$$
  Se due successivi sono uguali allora sono uguali anche i numeri.
- $$n \in N \implies n' \neq 1$$
  Il successivo di ogni numero è diverso da $$1$$, cioè il numero $$1$$ non ha antecedente.
- $$p(1)$$ e
  $$
  p(a) \implies p(a') \quad \forall a \in N \implies p(n) \quad \forall n \in N
  $$
  Se una proprietà è vera per il numero $$1$$ e, avendola supposta vera per un numero ne segue che è vera anche per il successivo di quel numero allora essa è vera per tutti i Numeri Naturali.

L'ultimo postulato è il cosiddetto **"principio di induzione matematica"**.

***

> Ho considerato l'insieme dei numeri naturali "classico" cioè $$1, 2, 3, \dots$$: lo preferisco per ragioni logiche e storiche.
> Comunque in alcuni testi scolastici viene aggiunto lo $$0$$, quindi dovrai considerare l'insieme $$0, 1, 2, 3, \dots$$ e quindi variare i postulati in modo da considerare lo zero invece dell'uno come numero iniziale.