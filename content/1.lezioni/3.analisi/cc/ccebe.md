Verificare che sono inverse tra loro le funzioni seguenti:

$$y = \log x - 2$$ $$y = e^{x+2}$$

> Anche qui consideriamo i nostri calcoli con la restrizione $$x > 0$$ per poter avere il logaritmo ben definito.

Chiamando la prima $$f(x)$$ e la seconda $$g(x)$$ possiamo procedere in due modi:

1. Calcolo $$f(g(x))$$
2. Calcolo $$g(f(x))$$

Per esercizio facciamolo in entrambi i modi:

- Calcolo $$f(g(x))$$
  Ho $$f(x) = \log x - 2$$ $$g(x) = e^{x+2}$$

  Sostituisco $$g(x)$$ al posto della $$x$$ nella $$f(x)$$:

  $$
  f(g(x)) = \log(e^{x+2}) - 2
  $$

  Posso eliminare tra loro esponenziale e logaritmo:

  $$
  y = x + 2 - 2
  $$
  $$
  y = x
  $$

- Calcolo $$g(f(x))$$
  Ho $$f(x) = \log x - 2$$ $$g(x) = e^{x+2}$$

  Sostituisco $$f(x)$$ al posto della $$x$$ nella $$g(x)$$:

  $$
  g(f(x)) = e^{(\log x - 2) + 2}
  $$
  $$
  y = e^{\log x}
  $$

  Elimino tra loro logaritmo ed esponenziale:

  $$
  y = x
  $$