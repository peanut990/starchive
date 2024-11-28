package com.starchive.springapp.posthashtag;

import static jakarta.persistence.FetchType.LAZY;

import com.starchive.springapp.hashtag.domain.HashTag;
import com.starchive.springapp.post.Post;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "PostHashTag")
public class PostHashTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "postHashTagId")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "postId")
    private Post post;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "hashTagId")
    private HashTag hashTag;


}
