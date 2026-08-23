# [La serie armonica]{.text-red}

Mostriamo ora, come applicazione, che la serie armonica è divergente

Si definisce serie armonica la serie dei reciproci dei numeri naturali

$$
s = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \frac{1}{5} + \dots
$$

Essendo la serie tutta a termini positivi non può essere indeterminata, ma può essere solamente convergente oppure divergente

Considero la [ridotta parziale $$s_{k, 2k}$$ del resto k-esimo](qde.html) della serie

$$
s_{k, 2k} = \frac{1}{k} + \frac{1}{k+1} + \frac{1}{k+2} + \dots + \frac{1}{k+k}
$$

è la somma di $$k$$ termini ed è sempre maggiore di $$1/2$$, infatti

$$
s_{k, 2k} = \frac{1}{k} + \frac{1}{k+1} + \frac{1}{k+2} + \dots + \frac{1}{k+k} > \frac{k}{k+k} = \frac{1}{2}
$$

> Infatti i $$k$$ termini sono decrescenti $$\frac{1}{k} < \frac{1}{k+1} < \frac{1}{k+2} < \frac{1}{k+3} \dots$$ (se aumenta il denominatore il valore della frazione diminuisce) e quindi la loro somma è maggiore della somma di $$k$$ volte il termine più piccolo $$\frac{1}{k+k}$$ che vale $$\frac{k}{k+k} = \frac{k}{2k} = \frac{1}{2}$$

Ora, per il [criterio generale di convergenza](qde.html) se il resto k-esimo non tende a zero la serie non è convergente, e quindi è divergente, come volevamo mostrare