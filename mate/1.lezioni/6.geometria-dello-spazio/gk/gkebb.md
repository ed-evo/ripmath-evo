# Area della superficie di rotazione di una poligonale regolare

Chiamiamo **poligonale regolare** parte del perimetro di un poligono regolare.

Dimostriamo che vale il teorema:
**L'area della superficie generata dalla rotazione completa di una poligonale regolare attorno ad un asse passante per il centro del poligono e non tagliante la poligonale vale il prodotto della circonferenza di raggio l'apotema della poligonale per la proiezione della poligonale sull'asse.**

> **Dimostrazione:**
>
> Notiamo che $M$ è il punto medio di ogni segmento ed $MO$ è l'asse del segmento stesso; inoltre le apoteme, essendo la poligonale regolare, sono tutte uguali:
>
> $$
> OM_1 = OM_2 = OM_3 = a
> $$
>
> Per il teorema dimostrato nella pagina precedente abbiamo che:
>
> - la superficie di rotazione generata da $AB$ vale:
>   $$
>   \text{Area} = 2 \pi OM_1 \cdot A'B' = 2 \pi a \cdot A'B'
>   $$
> - la superficie di rotazione generata da $BC$ vale:
>   $$
>   \text{Area} = 2 \pi OM_2 \cdot B'C' = 2 \pi a \cdot B'C'
>   $$
> - la superficie di rotazione generata da $CD$ vale:
>   $$
>   \text{Area} = 2 \pi OM_3 \cdot C'D' = 2 \pi a \cdot C'D'
>   $$
>
> Quindi la superficie di rotazione della poligonale regolare vale la somma delle varie superfici:
>
> $$
> \text{Area} = 2 \pi a A'B' + 2 \pi a B'C' + 2 \pi a \cdot C'D' = 2a \pi (A'B' + B'C' + C'D') = 2a \pi (A'D')
> $$
>
> cioè
>
> $$
> \text{Area} = 2a \pi (A'D')
> $$
>
> come volevamo.