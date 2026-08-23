# [Omomorfismo]{.text-red}

L'omomorfismo è un caso speciale di morfismo: si ha quando l'operazione si conserva:
cioè le due strutture
$$(A, \otimes)$$ e $$(B, \otimes)$$
sono dotate della stessa operazione (chiamiamola prodotto), ed al prodotto di due elementi in $$A$$ corrisponde in $$B$$ il prodotto degli elementi corrispondenti.

> Quindi un omomorfismo è sempre un morfismo.
> Per la definizione vedi però anche la nota in basso alla pagina precedente.

**definizione:**

> Date due strutture $$(A, \otimes)$$ e $$(B, \otimes)$$ dotate della stessa operazione $$\otimes$$ sugli insiemi $$A$$ e $$B$$ e data l'applicazione univoca
> $$f: A \to B$$
> diremo che $$f$$ è un omomorfismo fra le due strutture se indicati con $$a$$ e $$b$$ due elementi qualunque dell'insieme $$A$$ e con $$f(a)$$ ed $$f(b)$$ gli elementi corrispondenti nell'insieme $$B$$ vale:
>
> $$
> \textcolor{red}{f(a) \otimes f(b) = f(a \otimes b)}
> $$

> **Esempio:**
> Consideriamo le due strutture:
> - $$(N, +)$$ cioè l'insieme dei numeri naturali con l'operazione di addizione
> - $$(2N, +)$$ cioè l'insieme dei numeri pari sempre con l'operazione di addizione
>
> e consideriamo l'applicazione:
> $$f: N \to 2N \quad f(a) = 2a$$ che trasforma ogni numero nel suo doppio.
>
> Applichiamo la definizione per due elementi $$a$$ e $$b$$ di $$N$$:
>
> $$
> f(a) + f(b) = f(a + b)
> $$
>
> $$
> 2a + 2b = 2(a + b)
> $$
>
> per mostrare la validità dell'uguaglianza basta applicare al secondo membro la proprietà distributiva del prodotto rispetto alla somma:
>
> $$
> 2(a + b) = 2a + 2b
> $$
>
> quindi $$f$$ è un omomorfismo fra le due strutture.

Invece, nell'esempio della pagina precedente, non si tratta di morfismo essendo le due operazioni diverse.
Vedi anche la nota finale della pagina precedente.