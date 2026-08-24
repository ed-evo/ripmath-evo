> # Nota sulla determinazione degli asintoti orizzontali od obliqui
> 
> È possibile, semplicemente osservando la forma di una funzione, capire se la funzione ha un asintoto orizzontale, un asintoto obliquo oppure non ha asintoti di quel genere:
> Basta ricordare che per i limiti nelle [forme indeterminate](../cd/cdgbb.html):
> 
> - Se il numeratore ha lo stesso ordine di infinito del denominatore allora il limite è uguale al rapporto fra i due termini di grado più alto. Nel seguente esempio l'ordine di infinito del numeratore e del denominatore sono entrambi uguali a $$1$$:
> 
> $$
> \textcolor{red}{\lim_{x \to \infty} \frac{3x - 2\log x}{4x} = \frac{3}{4}}
> $$
> 
> - Se il numeratore ha ordine di infinito inferiore al denominatore allora il limite vale $$0$$. Esempio:
> 
> $$
> \textcolor{red}{\lim_{x \to \infty} \frac{x^3 + \log x}{e^x} = 0}
> $$
> 
> Allora possiamo dire che:
> 
> a. se nella funzione l'ordine del numeratore è uguale a quello del denominatore avremo un asintoto orizzontale del tipo
> $$\textcolor{red}{y = \text{numero}}$$
> 
> b. se nella funzione l'ordine del numeratore è inferiore a quello del denominatore avremo un asintoto orizzontale del tipo
> $$\textcolor{red}{y = 0}$$
> 
> c. se nella funzione l'ordine del numeratore è superiore di uno a quello del denominatore avremo un asintoto obliquo del tipo
> $$\textcolor{red}{y = mx + q}$$
> infatti poiché per calcolare $$m$$ dobbiamo fare il limite di $$f(x)/x$$, dobbiamo moltiplicare il denominatore per $$x$$, cioè aggiungere un grado al denominatore, ed il limite sarà un numero se numeratore e denominatore arrivano allo stesso grado.
> 
> d. se nella funzione l'ordine del numeratore è superiore di due, tre, ... a quello del denominatore non avremo un asintoto obliquo, ma la funzione andrà all'infinito accompagnando una parabola, una cubica, ...
> infatti poiché per calcolare $$m$$ dobbiamo fare il limite di $$f(x)/x$$, dobbiamo moltiplicare il denominatore per $$x$$, cioè aggiungere un grado al denominatore, il limite sarà infinito perché il numeratore supera comunque di grado il denominatore.
> 
> ***
> 
> Esempi:
> 
> a. $$
> \textcolor{red}{y = \frac{3x}{x - 1}}
> $$
> ha un asintoto orizzontale perché numeratore e denominatore hanno entrambi grado uno ed il rapporto fra i termini di grado più alto è $$\frac{3x}{x} = 3$$, quindi:
> asintoto orizzontale $$\textcolor{red}{y = 3}$$
> 
> ***
> 
> b. $$
> \textcolor{red}{y = \frac{x - 1}{x^2}}
> $$
> poiché il grado del numeratore è inferiore a quello del denominatore si ha:
> asintoto orizzontale $$\textcolor{red}{y = 0}$$
> 
> ***
> 
> c. $$
> \textcolor{red}{y = \frac{3x^2 - 1}{x}}
> $$
> ha un asintoto obliquo perché il grado del numeratore è due e quello del denominatore è uno, quindi quando farò $$f(x)/x$$ otterrò una frazione con lo stesso grado al numeratore e al denominatore $$\textcolor{red}{(m = 3)}$$.
> 
> ***
> 
> d. $$
> \textcolor{red}{y = \frac{3x^4 - 1}{x}}
> $$
> la funzione non ha un asintoto che la accompagni all'infinito.
> 
> ***