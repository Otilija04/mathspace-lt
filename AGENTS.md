<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Editable business data (email, Facebook, price, photo, form endpoint) lives only in src/config/site.ts — keeps placeholders in one place for the owner.
- Contact form posts JSON to `site.formEndpoint` when set, otherwise falls back to mailto — no backend required.
