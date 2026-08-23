#[Proprietà di $$u$$ e $$v$$]{.text-red-darken-1}

Se quindi consideriamo fisso il tasso $$i$$ abbiamo che il fattore $$u^n$$ sposta avanti i capitali di $$n$$ anni nel tempo e che il fattore $$v^n$$ sposta indietro i capitali di $$n$$ anni nel tempo (mantenendoli equivalenti).

> Qui ti consiglio, prima di procedere, di ripassare le proprietà delle potenze.

Siccome abbiamo che

$$
u = (1+i)
$$

$$
v = \frac{1}{(1+i)}
$$

abbiamo che $$u$$ e $$v$$ sono tra loro reciproci.

## Notevoli proprietà

- Il prodotto tra $$u$$ e $$v$$ vale sempre $$1$$:
  $$
  u \cdot v = 1
  $$
  > Se sposto in avanti di un anno un capitale poi lo sposto indietro sempre di un anno ottengo sempre lo stesso capitale.

- Se $$u$$ e $$v$$ hanno lo stesso esponente allora il loro prodotto vale sempre $$1$$:
  $$
  u^n \cdot v^n = 1
  $$
  > Se sposto in avanti di $$n$$ anni un capitale poi lo sposto indietro sempre di $$n$$ anni ottengo sempre lo stesso capitale.

- Se l'esponente è negativo allora posso scambiare $$u$$ e $$v$$ mettendo l'esponente positivo:
  $$
  u^{-n} = v^n \quad \text{e} \quad v^{-n} = u^n
  $$
  > Deriva dal fatto che se trasformo l'esponente da positivo a negativo il termine passa dal numeratore al denominatore e viceversa.
  >
  > Spostare in avanti di $$-n$$ anni un capitale equivale a spostarlo indietro di $$n$$ anni.
  > Spostare indietro di $$-n$$ anni un capitale equivale a spostarlo in avanti di $$n$$ anni.

- Dalla precedente deriva che dividere per una potenza di $$u$$ equivale a moltiplicare per una potenza di $$v$$ e viceversa; infatti:
  $$
  \frac{C}{u^n} = \frac{C}{v^{-n}} = C \cdot v^n
  $$
  $$
  \frac{C}{v^n} = \frac{C}{u^{-n}} = C \cdot u^n
  $$

- Il prodotto di due potenze di $$u$$ e $$v$$ è ancora uguale ad una potenza di $$u$$ e $$v$$ che ha come esponente la differenza degli esponenti:
  $$
  u^s \cdot v^t = u^{s-t} = v^{t-s}
  $$
  > Ad esempio $$u^7 \cdot v^5 = u^2$$ perché mi sposto in avanti di $$7$$ anni poi mi sposto indietro di $$5$$, il che equivale a spostarsi avanti di $$2$$ anni.
  > Potevamo anche scrivere $$v^{-2}$$ ma di solito si preferisce considerare l'esponente risultante positivo.