# [Somma fra serie]{.text-red}

Consideriamo la serie

$$
a_1 + a_2 + a_3 + a_4 + \dots
$$

ed anche la serie

$$
b_1 + b_2 + b_3 + b_4 + \dots
$$

Definiamo serie somma delle due serie date la serie:

$$
(a_1 + b_1) + (a_2 + b_2) + (a_3 + b_3) + (a_4 + b_4) + \dots
$$

cioè la serie i cui termini sono la somma dei termini di uguale posto nelle serie addendi.

> Se le due serie componenti sono convergenti allora anche la loro somma è convergente; e se le due serie convergono assolutamente allora anche la loro somma converge assolutamente.
>
> Anche se una delle due è convergente e l'altra è divergente possiamo ancora fare la somma ed otteniamo una serie divergente;
>
> inoltre: se entrambe le serie componenti sono divergenti positivamente (divergenti negativamente) allora la loro somma diverge positivamente (diverge negativamente).

> **Esempio:** sommando la serie armonica che è divergente
>
> $$
> s = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \dots
> $$
>
> con la serie armonica a segni alterni che è convergente
>
> $$
> s = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \frac{1}{6} + \frac{1}{7} - \dots
> $$
>
> otteniamo la serie divergente
>
> $$
> s = (1+1) + \left(\frac{1}{2} - \frac{1}{2}\right) + \left(\frac{1}{3} + \frac{1}{3}\right) + \left(\frac{1}{4} - \frac{1}{4}\right) + \left(\frac{1}{5} + \frac{1}{5}\right) + \left(\frac{1}{6} - \frac{1}{6}\right) + \left(\frac{1}{7} + \frac{1}{7}\right) + \dots
> $$
>
> $$
> s = 2 + 0 + \frac{2}{3} + 0 + \frac{2}{5} + 0 + \frac{2}{7} + \dots
> $$
>
> per mostrare che è divergente mostriamo che maggiora la serie armonica: infatti sommando i termini due a due otteniamo per la nostra serie
>
> $$
> s = 2 + \frac{2}{3} + \frac{2}{5} + \frac{2}{7} + \dots
> $$
>
> che posso scrivere anche come
>
> $$
> s = (1 + 1) + \left(\frac{1}{3} + \frac{1}{3}\right) + \left(\frac{1}{5} + \frac{1}{5}\right) + \left(\frac{1}{7} + \frac{1}{7}\right) + \dots
> $$
>
> e per la serie armonica otteniamo
>
> $$
> s = \left(1 + \frac{1}{2}\right) + \left(\frac{1}{3} + \frac{1}{4}\right) + \left(\frac{1}{5} + \frac{1}{6}\right) + \left(\frac{1}{7} + \frac{1}{8}\right) + \dots
> $$
>
> Essendo il secondo termine dentro ogni parentesi inferiore al primo termine ogni espressione entro parentesi è inferiore alla corrispondente espressione della serie sopra: infatti sopra ogni espressione entro parentesi è scomposta nella somma di due termini uguali tra loro ed uguali al primo termine dell'espressione sotto.
>
> quindi la serie armonica è minorante della nostra serie che, di conseguenza, diverge.