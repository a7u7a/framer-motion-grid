import React, { forwardRef, useMemo } from 'react'
import { useSnapshot } from 'valtio';
import state from '../../state';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import classes from "./article.module.scss"

interface ArticlePageProps {
    data: any
    seo: any
}

const ArticlePage = forwardRef((props: ArticlePageProps, ref: any) => {
    ArticlePage.displayName = "ArticlePage";
    const snapshot = useSnapshot(state);
    const { selectedCell } = snapshot;
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            {selectedCell !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    layoutId={`cell-${selectedCell}`}
                    className={classes.articleContainer}
                >
                    <button onClick={() => router.back()}>
                        <h2>
                            Back
                        </h2>
                    </button>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus accusamus commodi magni vel omnis quibusdam nihil laborum, repellendus eligendi dolorum, error deserunt repellat perferendis sint numquam consequatur ipsum at saepe dicta sapiente aperiam! Animi atque quos voluptate debitis soluta vitae quibusdam saepe praesentium, dolorum perspiciatis alias a laboriosam ad consectetur, ipsa, eligendi temporibus iusto reiciendis eum! Eos excepturi ipsa culpa incidunt veniam numquam dolorem amet esse omnis voluptate ullam quia repellat earum atque accusamus perferendis, necessitatibus, adipisci, consequatur nulla. Obcaecati voluptas commodi ab, veniam unde facere sunt similique, praesentium repudiandae, distinctio quo. Nostrum cumque possimus unde voluptatem sed excepturi eveniet consequuntur laboriosam soluta quam, nulla fugit hic, similique, odit harum eligendi. Vitae impedit dolorem consequuntur reprehenderit, delectus alias. Nam nemo vitae voluptatibus porro, harum, enim molestiae quibusdam laborum ullam omnis eveniet adipisci reiciendis. Expedita incidunt dignissimos sunt ut officia repellat et voluptate voluptatem quis eius corrupti reiciendis similique fugiat porro nesciunt veniam tempora perferendis ea, natus deserunt. Sunt, perspiciatis! Molestiae, doloremque? Maxime libero consequatur tenetur quisquam? Possimus, cupiditate. Eveniet quis delectus est dolores corporis deserunt nulla quaerat, libero veniam nihil fuga cum, neque repellendus minima voluptate enim necessitatibus distinctio commodi debitis officiis deleniti. Enim, debitis. Voluptates excepturi, in, quis sint quo blanditiis unde dolore atque fugit ipsum eligendi nobis iure ipsa quibusdam necessitatibus voluptatibus alias laborum, veritatis fugiat ut exercitationem molestiae. Accusantium vero, nobis quam, perferendis dicta dolorem exercitationem omnis rerum libero esse est nihil saepe modi officia eius eaque voluptas facilis placeat magni eum deserunt id dolores. Ipsam quia reprehenderit blanditiis accusantium placeat? Beatae corporis quia laboriosam? Velit consequuntur aperiam iusto libero quidem, quod provident facilis nisi voluptas? Consectetur sequi repudiandae impedit maxime placeat sed enim veniam, aspernatur molestias repellat earum non ullam rerum modi numquam praesentium aut, nisi obcaecati, dolor magnam expedita. Illum quos officia alias libero ab beatae nemo earum placeat ipsum aspernatur, aperiam quod blanditiis reprehenderit sapiente ad harum eum facere debitis eius voluptatem, vel natus. Inventore, accusantium unde, rerum iure libero voluptate perferendis consequatur facilis totam explicabo numquam adipisci nesciunt molestiae odio aspernatur vitae, expedita ullam? Sapiente veritatis nam blanditiis repellat officia aliquid nobis suscipit earum iste itaque expedita, cum ut facilis incidunt hic mollitia assumenda tempore nulla, unde, tenetur dignissimos aspernatur quasi nostrum pariatur. Nostrum, libero excepturi impedit eaque officia vero nulla cum a repudiandae ex quia, dolor, aliquam temporibus. Repellat ipsa aut dolorem eaque corporis consequatur ea labore excepturi mollitia velit! Maiores ipsam facilis incidunt voluptate eligendi, consectetur aperiam in, nihil amet dolore molestias ipsa laudantium quas iste eum unde dolorem quisquam sapiente soluta repellat. Vel repellendus tempore deserunt assumenda nemo neque dolorum qui laborum. Quae maxime asperiores iusto tempora ratione perspiciatis, architecto explicabo similique repellat magni nisi et non nam eum ad laborum rerum doloremque, dolore eius quis nulla aspernatur veniam. Corrupti blanditiis, iste ea sit ipsam illo eos, odio consequuntur ipsa temporibus excepturi optio. Ipsam neque, officia dolor voluptatibus iste deleniti est beatae sint, ipsum aliquid dolorem, impedit perferendis nobis enim reprehenderit expedita harum vitae quod eligendi quis. Nostrum, consequatur.
                    </h1>
                </motion.div>
            )}
        </>
    );
});

export default ArticlePage;
